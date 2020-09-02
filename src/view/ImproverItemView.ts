import { createElement } from '../helper';
import { improvesItem } from '../index';

export class ImproverItemView {
  item: improvesItem;

  constructor(item: improvesItem) {
    this.item = item;
  }

  render(data: improvesItem) {
    const img = createElement('img', { alt: `${data.name}`, src: data.img });
    return createElement('div', { 'data-id': data.id, 'data-includes': data.include }, img);
  }
}
