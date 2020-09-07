import { ImprovesItem } from '../data/data';
import { createElement } from '../utils/createHTMLelementFunc';

export class ImproveItemsView {
  divWrapper: HTMLDivElement;

  constructor() {
    this.divWrapper = document.querySelector('.wrapper') as HTMLDivElement;
  }

  handelSelected({ target }: any) {
    const id = target.parentNode.getAttribute('data-id');
    // globalEventEmitter.emit('selectedImproveItem', { id });
  }

  createItem(data: ImprovesItem) {
    const img = createElement('img', { alt: `${data.name}`, src: data.img });
    const div = createElement('div', { 'data-id': data.id, 'data-includes': data.include }, img);
    div.addEventListener('click', this.handelSelected.bind(this));
    return div;
  }

  render(data: Array<ImprovesItem>) {
    const h3ImprovesItem = createElement('h3', {}, 'Improves items');
    const div = createElement('div', { className: 'improves_items_lists' });
    data.forEach(item => {
      return div.appendChild(this.createItem(item));
    });
    const divImprovesItems = createElement(
      'div',
      { className: 'improves_items' },
      h3ImprovesItem,
      div
    );
    return this.divWrapper.appendChild(divImprovesItems);
  }
}
