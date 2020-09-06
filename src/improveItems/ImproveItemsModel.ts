import { globalEventEmitter } from '../index';
import { ImprovesItem } from '../data/data';

export class ImproveItemsModel {
  items: Array<ImprovesItem>;

  constructor(items: Array<ImprovesItem>) {
    this.items = items;
  }

  selectedItem(id: string) {
    const newItems = this.items.map(value => {
      if (value.id === id) {
        // eslint-disable-next-line no-param-reassign
        value.selected = !value.selected;
        return value;
      }
      return value;
    });
    globalEventEmitter.emit('changeImprovesItems', newItems);
  }
}
