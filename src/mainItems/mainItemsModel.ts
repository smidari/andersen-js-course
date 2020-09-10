import { v1 } from 'uuid';
import { MainItem } from '../data/data';
import { save } from '../utils/localStorageFunctions';
import { EventEmitter } from '../utils/eventEmiter/EventEmiter';
import { MAIN_SELECTED_ITEMS_CHANGED } from '../utils/eventEmiter/events';
import { globalEventEmitter } from '../index';

export type MainItemsModelType = {
  items: Array<MainItem>;
  setData: (items: Array<MainItem>, selectedItems: Array<MainItem>) => void;
  selectedItem: (id: string) => void;
  unSelectedItem: (id: string) => void;
};

export class MainItemsModel extends EventEmitter {
  items: Array<MainItem>;
  selectedItems: Array<MainItem>;

  constructor() {
    super();
    this.items = [];
    this.selectedItems = [];
  }

  setData(items: Array<MainItem>, selectedItems: Array<MainItem>) {
    this.items = items;
    this.selectedItems = selectedItems;
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    save('mainItems', this.items);
    save('selectedMainItems', this.selectedItems);
  }

  selectedItem(id: string) {
    if (this.selectedItems.length < 3) {
      this.items = this.items.map(item => {
        if (item.id === id && !item.selected) {
          item.changedSelected();
          this.selectedItems.push(item);
          return item;
        }
        return item;
      });
      this.saveToLocalStorage();
      globalEventEmitter.emit(MAIN_SELECTED_ITEMS_CHANGED, this.selectedItems);
    }
  }

  unSelectedItem(id: string) {
    this.items = this.items.map(item => {
      if (item.id === id) {
        item.changedSelected();
        return item;
      }
      return item;
    });
    this.selectedItems = [...this.selectedItems].filter(item => item.id !== id);
    this.saveToLocalStorage();
    globalEventEmitter.emit(MAIN_SELECTED_ITEMS_CHANGED, this.selectedItems);
  }
}
export class Item {
  id: string;
  name: string;
  img: string;
  selected: boolean;

  constructor(name: string, image: string, id = v1()) {
    this.id = id;
    this.name = name;
    this.img = image;
    this.selected = false;
  }

  changedSelected() {
    this.selected = !this.selected;
  }
}
