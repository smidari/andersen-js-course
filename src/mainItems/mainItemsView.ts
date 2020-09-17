import { MainItem } from '../data/data';
import { createElement } from '../utils/createHTMLelementFunc';
import { EventEmitter } from '../utils/eventEmiter/EventEmiter';
import { DROP_START, SELECTED } from '../utils/eventEmiter/events';

export type MainItemsViewType = {
  render: (data: Array<MainItem>) => HTMLElement | null;
  subscribe: (event: string, selectedItem: any) => void;
};

export class MainItemsView extends EventEmitter {
  divWrapper: HTMLDivElement;

  constructor() {
    super();
    this.divWrapper = document.querySelector('.wrapper') as HTMLDivElement;
  }

  handelDraggStart({ target }: any) {
    const id = target.parentNode.getAttribute('data-id');
    this.emit(DROP_START, { id });
  }

  createItem(item: MainItem) {
    const img = createElement('img', { alt: `${item.name}`, src: item.img });
    const div = createElement(
      'div',
      { className: 'item_card', 'data-id': item.id, 'data-tooltip': item.name, draggable: true },
      img
    );
    div.addEventListener('dragstart', this.handelDraggStart.bind(this));
    return div;
  }

  render(data: Array<MainItem>) {
    const h3MainItem = createElement('h3', {}, 'Main items');
    const div = createElement('div', { className: 'main_items_lists' });
    data.forEach(item => {
      return div.appendChild(this.createItem(item));
    });
    const divMainItem = createElement('div', { className: 'main_items' }, h3MainItem, div);
    return this.divWrapper.appendChild(divMainItem);
  }
}
