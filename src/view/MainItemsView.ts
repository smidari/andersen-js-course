import { createElement } from '../helper';
import { mainItemType, MainItemView } from './MainItemView';

export class MainItemsView {
  items: Array<mainItemType>;

  constructor(items: Array<mainItemType>) {
    this.items = items;
  }

  render(data: Array<mainItemType>) {
    const div = createElement('div', { className: 'main_items_lists' });
    data.forEach(item => {
      const newItem = new MainItemView(item);
      return div.appendChild(newItem.render(item));
    });
    return div;
  }
}
