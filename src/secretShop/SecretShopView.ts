import { ImprovesItem, MainItem } from '../data/data';
import { createElement } from '../utils/createHTMLelementFunc';
import { EventEmitter } from '../utils/eventEmiter/EventEmiter';
import {
  CHECK,
  DROP_IMPOVE_ITEM_SUCCESS,
  DROP_MAIN_ITEM_SUCCESS, REMOVE_DROP_IMPROVE_ELEMENT, REMOVE_DROP_MAIN_ELEMENT,
} from '../utils/eventEmiter/events';

export type SelectedItems = {
  mainItemsSelected: Array<MainItem> | [];
  improveItemSelected: ImprovesItem | null;
  myItems: Array<ImprovesItem>;
};

export class SecretShopView extends EventEmitter {
  divMainItem: HTMLDivElement;
  dropMainItem: any;
  dropImproveItem: any;

  constructor() {
    super();
    this.divMainItem = document.querySelector('.main_items') as HTMLDivElement;
    this.dropMainItem = null;
    this.dropImproveItem = null;
  }

  setDropItem(dropItem: MainItem) {
    this.dropMainItem = dropItem;
  }

  setDropImproveItem(dropImproveItem: ImprovesItem) {
    this.dropImproveItem = dropImproveItem;
  }

  handelUnSelectedMainElement({ target }: any) {
    const id = target.getAttribute('data-id');
    if (id) {
      target.remove();
      this.emit(REMOVE_DROP_MAIN_ELEMENT, { id });
    }
  }

  handelUnSelectedImproveElement({ target }: any) {
    const id = target.getAttribute('data-id');
    if (id) {
      target.remove();
      this.emit(REMOVE_DROP_IMPROVE_ELEMENT, { id });
    }
  }

  handleClickCheckBtn() {
    this.emit(CHECK, {});
  }

  handelDragOver(event: any) {
    event.preventDefault();
  }

  handelDragEnter(event: any) {
    event.target.classList.add('hovered');
  }

  handelDragLeave(event: any) {
    event.target.classList.remove('hovered');
  }

  handelDragDropMainItem(event: any) {
    const img = createElement('img', {
      id: this.dropMainItem.name,
      alt: this.dropMainItem.name,
      src: this.dropMainItem.img,
      'data-id': this.dropMainItem.id,
    });
    event.target.appendChild(img);
    this.emit(DROP_MAIN_ITEM_SUCCESS, this.dropMainItem);
  }

  handelDragDropImproveItem(event: any) {
    const img = createElement('img', {
      alt: `${this.dropImproveItem.name}`,
      src: this.dropImproveItem.img,
      'data-id': this.dropImproveItem.id,
    });
    event.target.appendChild(img);
    this.emit(DROP_IMPOVE_ITEM_SUCCESS, this.dropImproveItem);
  }

  createSelectedMainElements() {
    let selectedMainItems: Array<HTMLElement> = [];

    for (let i = selectedMainItems.length; i <= 3; i++) {
      const div = createElement('div', { className: 'cell_item' });
      div.addEventListener('dragover', this.handelDragOver.bind(this));
      div.addEventListener('dragenter', this.handelDragEnter.bind(this));
      div.addEventListener('dragleave', this.handelDragLeave.bind(this));
      div.addEventListener('drop', this.handelDragDropMainItem.bind(this));
      div.addEventListener('click', this.handelUnSelectedMainElement.bind(this));
      selectedMainItems.push(div);
    }
    return createElement(
      'div',
      { className: 'shop_main_items_list' },
      selectedMainItems[0],
      selectedMainItems[1],
      selectedMainItems[2]
    );
  }

  createSelectedImproveElement(item: ImprovesItem | null) {
    const itemDiv = createElement('div', { className: 'shop_improve_item' });
    itemDiv.addEventListener('dragover', this.handelDragOver.bind(this));
    itemDiv.addEventListener('dragenter', this.handelDragEnter.bind(this));
    itemDiv.addEventListener('dragleave', this.handelDragLeave.bind(this));
    itemDiv.addEventListener('drop', this.handelDragDropImproveItem.bind(this));
    itemDiv.addEventListener('click', this.handelUnSelectedImproveElement.bind(this));
    return createElement('div', { className: 'shop_improves_items_list' }, itemDiv);
  }

  createMyItems(data: Array<ImprovesItem>) {
    const h3 = createElement('h3', {}, 'My items');
    let arrMyItems: Array<any> = [];
    if (data) {
      data.forEach(item => {
        const img = createElement('img', { 'data-id': item.id , alt: `${item.name}`, src: item.img });
        const div = createElement('div', { className: 'cell_item' }, img);
        arrMyItems.push(div);
      });
    }
    for (let i = arrMyItems.length; i < 8; i++) {
      const img = createElement('img', {});
      const div = createElement('div', { className: 'my_item' }, img);
      arrMyItems.push(div);
    }
    const divListMyItems = createElement('div', { className: 'list_my_items' });
    arrMyItems.forEach(item => divListMyItems.appendChild(item));
    return createElement('div', { className: 'my_items' }, h3, divListMyItems);
  }

  render(data: SelectedItems) {
    // removing elements before re-rendering
    let myNode = document.querySelector('.secret_shop');
    if (myNode) {
      myNode.remove();
    }
    // create block for my items who will be crafted
    const myItems = this.createMyItems(data.myItems);

    // create 3 div for selected the main items
    const mainItemsDiv = this.createSelectedMainElements();

    // create a button to check the selected items
    const checkBtn = createElement('button', { className: 'check' }, 'Check');
    checkBtn.addEventListener('click', this.handleClickCheckBtn.bind(this));

    //create div for selected the improve item
    const ImproveItemDiv = this.createSelectedImproveElement(data.improveItemSelected);

    //compound of all created elements
    const divCraftTable = createElement(
      'div',
      { className: 'craft_table' },
      mainItemsDiv,
      checkBtn,
      ImproveItemDiv
    );
    const divSecretShop = createElement(
      'div',
      { className: 'secret_shop' },
      myItems,
      divCraftTable
    );
    return this.divMainItem.after(divSecretShop);
  }
}
