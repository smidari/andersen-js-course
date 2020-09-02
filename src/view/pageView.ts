import { createElement } from '../helper';
import { mainItemType } from './MainItemView';
import { improvesItem } from '../index';
import { MainItemsView } from './MainItemsView';
import { ImproverItemsView } from './ImproverItemsView';
import { SecretShopImproverItemView } from './SecretShopImproverItemView';
import { SecretShopMainItemsView } from './SecretShopMainItemsView';

export type dataRenderPageViewType = {
  mainItems: Array<mainItemType>;
  improvesItems: Array<improvesItem>;
};

class PageView {
  div: HTMLDivElement | null;

  constructor() {
    this.div = document.querySelector('.wrapper');
  }

  render(data: dataRenderPageViewType) {
    if (this.div) {
      while (this.div.firstChild) {
        this.div.removeChild(this.div.firstChild);
      }
      const mainItems = new MainItemsView(data.mainItems);
      const h3MainItem = createElement('h3', {}, 'Main items');
      const divMainItem = createElement(
        'div',
        { className: 'main_items' },
        h3MainItem,
        mainItems.render(data.mainItems)
      );
      const improvesItems = new ImproverItemsView(data.improvesItems);
      const h3ImprovesItem = createElement('h3', {}, 'Improves items');
      const divImprovesItems = createElement(
        'div',
        { className: 'improves_items' },
        h3ImprovesItem,
        improvesItems.render(data.improvesItems)
      );
      const shopImprovesItem = new SecretShopImproverItemView();
      const shopMainItems = new SecretShopMainItemsView();
      const divSecretShop = createElement(
        'div',
        { className: 'secret_shop' },
        shopMainItems.render(data.mainItems),
        shopImprovesItem.render(data.improvesItems)
      );
      this.div.appendChild(divMainItem);
      this.div.appendChild(divSecretShop);
      return this.div.appendChild(divImprovesItems);
    }
    return this.div;
  }
}

export default PageView;
