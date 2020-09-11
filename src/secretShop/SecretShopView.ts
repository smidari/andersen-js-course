import { ImprovesItem, MainItem } from '../data/data';
import { createElement } from '../utils/createHTMLelementFunc';
import { EventEmitter } from '../utils/eventEmiter/EventEmiter';
import { CHECK, DROP_IMPOVE_ITEM_SUCCSESS, DROP_SUCCSESS } from '../utils/eventEmiter/events';

export type SelectedItems = {
  mainItemsSelected: Array<MainItem> | [];
  improveItemSelected: ImprovesItem | null;
  myItems: Array<ImprovesItem>;
};

export class SecretShopView extends EventEmitter {
  divMainItem: HTMLDivElement;
  dropItem: any;
  dropImproveItem: any;

  constructor() {
    super();
    this.divMainItem = document.querySelector('.main_items') as HTMLDivElement;
    this.dropItem = null;
    this.dropImproveItem = null;
  }

  setDropItem(dropItem: any) {
    this.dropItem = dropItem;
  }

  setDropImproveItem(dropImproveItem: ImprovesItem) {
    this.dropImproveItem = dropImproveItem;
  }

  handelUnSelectedMainElement({ target }: any) {
    const id = target.getAttribute('data-id');
    target.remove();
    this.emit('removeMainElement', { id });

  }

  handelUnSelectedImproveElement({ target }: any) {
    const id = target.parentNode.getAttribute('data-id');
    target.remove();
    this.emit('removeImproveElement', { id });
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
      id: this.dropItem.name,
      alt: this.dropItem.name,
      src: this.dropItem.img,
      'data-id': this.dropItem.id,
    });
    event.target.appendChild(img);
    this.emit(DROP_SUCCSESS, this.dropItem);
  }

  handelDragDropImproveItem(event: any) {
    const img = createElement('img', {
      alt: `${this.dropImproveItem.name}`,
      src: this.dropImproveItem.img,
      'data-id': this.dropImproveItem.id,
    });
    event.target.appendChild(img);
    this.emit(DROP_IMPOVE_ITEM_SUCCSESS, this.dropImproveItem);
  }

  createSelectedMainElements(items: any) {
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
        const img = createElement('img', { alt: `${item.name}`, src: item.img });
        const div = createElement('div', { className: 'cell_item', 'data-id': item.id }, img);
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
    let myNode = document.querySelector('.secret_shop');
    if (myNode) {
      myNode.remove();
    }
    const myItems = this.createMyItems(data.myItems);

    const mainItemsDiv = this.createSelectedMainElements(data.mainItemsSelected);
    const checkBtn = createElement('button', { className: 'check' }, 'Check');
    checkBtn.addEventListener('click', this.handleClickCheckBtn.bind(this));
    const ImproveItemDiv = this.createSelectedImproveElement(data.improveItemSelected);
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
