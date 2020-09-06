import { ImprovesItem, MainItem } from '../data/data';
import { createElement } from '../utils/createHTMLelementFunc';

export type SelectedItems = {
  improveItem: ImprovesItem;
  mainItems: Array<MainItem>;
};

export class SecretShopView {
  div: HTMLDivElement | null;

  constructor() {
    this.div = document.querySelector('.wrapper');
  }

  // eslint-disable-next-line no-unused-vars
  render(data: SelectedItems) {
    if (this.div) {
      const img = createElement('img', {});
      const div = createElement('div', {}, img);
      const img2 = createElement('img', {});
      const div2 = createElement('div', {}, img2);
      const img3 = createElement('img', {});
      const div3 = createElement('div', {}, img3);
      const mainItemsDiv = createElement(
        'div',
        { className: 'shop_main_items_list' },
        div,
        div2,
        div3
      );
      const ImproveItemImg = createElement('img', {});
      const itemDiv = createElement('div', { className: 'shop_improve_item' }, ImproveItemImg);
      const ImproveItemDiv = createElement(
        'div',
        { className: 'shop_improves_items_list' },
        itemDiv
      );

      const divSecretShop = createElement(
        'div',
        { className: 'secret_shop' },
        mainItemsDiv,
        ImproveItemDiv
      );

      return this.div.appendChild(divSecretShop);
    }
    return this.div;
  }
}
