import { createElement } from '../helper';
import { improvesItem } from '../index';

export class SecretShopImproverItemView {
  render(data: Array<improvesItem>): any {
    const selectedDiv: Array<HTMLElement> = [];
    const img = createElement('img', {});
    const div = createElement('div', { className: 'shop_improve_item' }, img);

    data.forEach(item => {
      if (item.selected) {
        const img = createElement('img', { alt: `${item.name}`, src: item.img });
        selectedDiv.push(
          createElement('div', { className: 'shop_improve_item', 'data-id': item.id }, img)
        );
      }
    });

    return createElement(
      'div',
      { className: 'shop_improves_items_list' },
      selectedDiv[0] ? selectedDiv[0] : div
    );
  }
}
