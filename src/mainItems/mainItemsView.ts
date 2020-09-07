import { MainItem } from '../data/data';
import { createElement } from '../utils/createHTMLelementFunc';
import { EventEmitter } from '../utils/eventEmiter/EventEmiter';

export class MainItemsView extends EventEmitter {
  divWrapper: HTMLDivElement;

  constructor() {
    super();
    this.divWrapper = document.querySelector('.wrapper') as HTMLDivElement;
  }

  handelSelected({ target }: any) {
    const id = target.parentNode.getAttribute('data-id');
    // globalEventEmitter.emit(SELECTED, { id });
  }

  createItem(data: MainItem) {
    const img = createElement('img', { alt: `${data.name}`, src: data.img });
    const div = createElement('div', { 'data-id': data.id }, img);
    div.addEventListener('click', this.handelSelected.bind(this));
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
