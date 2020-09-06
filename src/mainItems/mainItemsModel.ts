import { globalEventEmitter } from '../index';
import { MainItem } from '../data/data';

export class MainItemsModel {
  items: Array<MainItem>;

  constructor(items: Array<MainItem>) {
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
    globalEventEmitter.emit('changeMainItems', newItems);
  }
}
