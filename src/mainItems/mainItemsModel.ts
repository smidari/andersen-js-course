import { MainItem } from '../data/data';
import { save } from '../utils/localStorageFunctions';
import { EventEmitter } from '../utils/eventEmiter/EventEmiter';
import { globalEventEmitter } from '../index';
import { MAIN_ITEMS } from '../utils/localStorage/const';

export class MainItemsModel extends EventEmitter {
  private _items: Array<MainItem>;

  constructor() {
    super();
    this._items = [];
  }

  get items(): Array<MainItem> {
    return this._items;
  }

  set items(value: Array<MainItem>) {
    this._items = value;
    save(MAIN_ITEMS, this._items)
  }

  dropItem(id: string) {
    const dropItem = this._items.find(item => item.id === id);
    save('dropItem', dropItem);
    globalEventEmitter.emit('dropItem', dropItem);
  }
}

