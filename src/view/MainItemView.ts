import { createElement } from '../helper';
import { globalEventEmitter } from '../index';

export type mainItemType = {
  selected: boolean;
  id: string;
  name: string;
  img: string;
};

export class MainItemView {
  item: mainItemType;

  constructor(item: mainItemType) {
    this.item = item;
  }

  handelSelected({ target }: any) {
    const id = target.parentNode.getAttribute('data-id');
    globalEventEmitter.emit('selected', { id });
  }

  render(data: mainItemType) {
    const img = createElement('img', { alt: `${data.name}`, src: data.img });
    const div = createElement('div', { 'data-id': data.id }, img);
    div.addEventListener('click', this.handelSelected.bind(this));
    return div;
  }
}
