import { createElement } from '../helper';
import { globalEventEmitter, improvesItem } from '../index';

export class ImproverItemView {
  item: improvesItem;

  constructor(item: improvesItem) {
    this.item = item;
  }

  handelSelected({ target }: any) {
    console.log('clock');
    const id = target.parentNode.getAttribute('data-id');
    globalEventEmitter.emit('selectedImproveItem', { id });
  }

  render(data: improvesItem) {
    const img = createElement('img', { alt: `${data.name}`, src: data.img });
    const div = createElement('div', { 'data-id': data.id, 'data-includes': data.include }, img);
    div.addEventListener('click', this.handelSelected.bind(this));
    return div;
  }
}
