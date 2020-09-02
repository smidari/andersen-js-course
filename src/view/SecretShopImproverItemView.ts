import { createElement } from '../helper';
import { improvesItem } from '../index';

export class SecretShopImproverItemView {
  render(data: Array<improvesItem>): any {
    const img = createElement('img', {});
    return createElement('div', { className: 'shop_improve_item' }, img);
  }
}