import { save } from '../utils/localStorageFunctions';
import { EventEmitter } from '../utils/eventEmiter/EventEmiter';
import { globalEventEmitter } from '../index';
import { ImprovesItem } from '../data/data';
import { ItemImprove } from './improveItem';
import { IMPROVES_ITEMS } from '../utils/localStorage/const';
import { DROP_START_IMPROVE_ITEM_FOR_CRAFT_TABLE } from '../utils/eventEmiter/events';

export class ImproveItemsModel extends EventEmitter {
  private _items: ImprovesItem[];

  constructor() {
    super();
    this._items = [];
  }

  get items(): ImprovesItem[] {
    return this._items;
  }

  set items(value: ImprovesItem[]) {
    this._items = value;
    save(IMPROVES_ITEMS, this.items);
  }

  addNewItem(data: { name: string; mainItems: Array<string> }) {
    const newItem = new ItemImprove(data.name, data.mainItems);
    this._items = [...this._items, newItem];
    save(IMPROVES_ITEMS, this.items);
  }

  getDropStartItemById(id: string) {
    const dropItem = this._items.find(item => item.id === id);
    globalEventEmitter.emit(DROP_START_IMPROVE_ITEM_FOR_CRAFT_TABLE, dropItem);
  }
}
