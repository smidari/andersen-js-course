import { createElement } from '../helper';
import { improvesItem } from '../index';
import { MainItemView } from './MainItemView';

export class ImproverItemsView {
  items: Array<improvesItem>;

  constructor(items: Array<improvesItem>) {
    this.items = items;
  }

  render(data: Array<improvesItem>) {
    const div = createElement('div', { className: 'improves_items_lists' });

    data.forEach(item => {
      const newItem = new MainItemView(item);

      return div.appendChild(newItem.render(item));
    });
    return div;
  }
}
