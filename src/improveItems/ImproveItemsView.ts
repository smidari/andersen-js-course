import { globalEventEmitter } from '../index';
import { ImprovesItem } from '../data/data';
import { createElement } from '../utils/createHTMLelementFunc';

export class ImproveItemsView {
  div: HTMLDivElement | null;

  constructor() {
    this.div = document.querySelector('.wrapper');
  }

  handelSelected({ target }: any) {
    console.log('clock');
    const id = target.parentNode.getAttribute('data-id');
    globalEventEmitter.emit('selectedImproveItem', { id });
  }

  createItem(data: ImprovesItem) {
    const img = createElement('img', { alt: `${data.name}`, src: data.img });
    const div = createElement('div', { 'data-id': data.id, 'data-includes': data.include }, img);
    div.addEventListener('click', this.handelSelected.bind(this));
    return div;
  }

  render(data: Array<ImprovesItem>) {
    if (this.div) {
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
      return this.div.appendChild(divImprovesItems);
    }
    return this.div;
  }
}
