import { globalEventEmitter } from '../index';
// @ts-ignore
import { mainItemType } from '../view/MainItemView';

class ModelMainItems {
  items: Array<mainItemType>;

  constructor(items: Array<mainItemType>) {
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

export default ModelMainItems;
