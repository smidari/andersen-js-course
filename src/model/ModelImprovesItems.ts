import { globalEventEmitter, improvesItem } from '../index';

class ModelImprovesItems {
  items: Array<improvesItem>;

  constructor(items: Array<improvesItem>) {
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

export default ModelImprovesItems;
