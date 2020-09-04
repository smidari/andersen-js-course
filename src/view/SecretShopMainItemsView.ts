import { mainItem } from '../index';
import { createElement } from '../helper';

export class SecretShopMainItemsView {
  render(data: Array<mainItem>) {
    const selectedDiv: Array<HTMLElement> = [];
    const img = createElement('img', {});
    const div = createElement('div', {}, img);
    const img2 = createElement('img', {});
    const div2 = createElement('div', {}, img2);
    const img3 = createElement('img', {});
    const div3 = createElement('div', {}, img3);
    data.forEach(item => {
      if (item.selected) {
        const img = createElement('img', { alt: `${item.name}`, src: item.img });
        selectedDiv.push(createElement('div', { 'data-id': item.id }, img));
      }
    });

    return createElement(
      'div',
      { className: 'shop_main_items_list' },
      selectedDiv[0] ? selectedDiv[0] : div,
      selectedDiv[1] ? selectedDiv[1] : div2,
      selectedDiv[2] ? selectedDiv[2] : div3
    );
  }
}
