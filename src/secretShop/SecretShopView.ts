import { ImprovesItem, MainItem } from '../data/data';
import { createElement } from '../utils/createHTMLelementFunc';
import { EventEmitter } from '../utils/eventEmiter/EventEmiter';
import { CHECK, UN_SELECTED_IMPROVE_ITEM, UN_SELECTED_MAIN_ITEM } from '../utils/eventEmiter/events';
import { globalEventEmitter } from '../index';

export type SelectedItems = {
  mainItemsSelected: Array<MainItem> | [];
  improveItemSelected: ImprovesItem | null;
};

// export type SecretShopViewType = {
//   render: (data: {
//     improveItemSelected: ImprovesItem | null;
//     mainItemsSelected: Array<MainItem> | [];
//   }) => HTMLElement;
//   subscribe: (event: string, func: any) => void;
// };

export class SecretShopView extends EventEmitter {
  divMainItem: HTMLDivElement;

  constructor() {
    super();
    this.divMainItem = document.querySelector('.main_items') as HTMLDivElement;
  }

  handelUnSelectedMainElement({ target }: any) {
    const id = target.parentNode.getAttribute('data-id');
    globalEventEmitter.emit(UN_SELECTED_MAIN_ITEM, { id });
  }

  handelUnSelectedImproveElement({ target }: any) {
    console.log('sda');
    const id = target.parentNode.getAttribute('data-id');
    globalEventEmitter.emit(UN_SELECTED_IMPROVE_ITEM, { id });
  }

  handleClickCheckBtn(){
    this.emit(CHECK, {});
  }

  createSelectedMainElements(items: Array<MainItem>) {
    let selectedMainItems: Array<HTMLElement> = [];
    items.forEach((item, index) => {
      const img = createElement('img', { alt: `${item.name}`, src: item.img });
      const div = createElement('div', { 'data-id': item.id }, img);
      div.addEventListener('click', this.handelUnSelectedMainElement.bind(this));
      selectedMainItems.push(div);
    });
    for (let i = selectedMainItems.length; i <= 3; i++) {
      const img = createElement('img', {});
      const div = createElement('div', {}, img);
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
    if (item) {
      const ImproveItemImg = createElement('img', { alt: `${item.name}`, src: item.img });
      const itemDiv = createElement(
        'div',
        { className: 'shop_improve_item', 'data-id': item.id },
        ImproveItemImg
      );
      itemDiv.addEventListener('click', this.handelUnSelectedImproveElement.bind(this));
      return createElement('div', { className: 'shop_improves_items_list' }, itemDiv);
    } else {
      const ImproveItemImg = createElement('img', {});
      const itemDiv = createElement('div', { className: 'shop_improve_item' }, ImproveItemImg);
      return createElement('div', { className: 'shop_improves_items_list' }, itemDiv);
    }
  }

  render(data: SelectedItems) {
    let myNode = document.querySelector('.secret_shop');
    if (myNode) {
      myNode.remove();
    }
    const mainItemsDiv = this.createSelectedMainElements(data.mainItemsSelected);
    const checkBtn = createElement('button', {className: 'check'}, 'Check');
    checkBtn.addEventListener('click', this.handleClickCheckBtn.bind(this) );
    const ImproveItemDiv = this.createSelectedImproveElement(data.improveItemSelected);

    const divSecretShop = createElement(
      'div',
      { className: 'secret_shop' },
      mainItemsDiv,
      checkBtn,
      ImproveItemDiv
    );
    return this.divMainItem.after(divSecretShop);
  }
}
