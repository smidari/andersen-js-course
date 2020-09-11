import { save } from '../utils/localStorageFunctions';
import { EventEmitter } from '../utils/eventEmiter/EventEmiter';
import { globalEventEmitter } from '../index';
import { ImprovesItem } from '../data/data';
import { ItemImprove } from './improveItem';

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
    save('improvesItems', this.items);
  }

  addNewItem(data: any) {
    const newItem = new ItemImprove(data.name, data.mainItems);
    this._items = [...this._items, newItem];
    save('improvesItems', this.items);
  }

  dropImproveItem(id: string) {
    const dropImproveItem = this._items.find(item => item.id === id);
    save('dropImproveItem', dropImproveItem);
    globalEventEmitter.emit('dropGlobalImproveItem', dropImproveItem);
  }
}
