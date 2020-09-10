import { v1 } from 'uuid';
import { ImprovesItem } from '../data/data';
import { save } from '../utils/localStorageFunctions';
import { EventEmitter } from '../utils/eventEmiter/EventEmiter';
import { globalEventEmitter } from '../index';
import { IMPROVE_SELECTED_ITEMS_CHANGED } from '../utils/eventEmiter/events';

export class ItemImprove {
  id: string;
  name: string;
  img: string;
  selected: boolean;
  include: Array<string>;

  constructor(
    name: string,
    include: Array<string>,
    image = 'http://dota2-i.ru/img/items/001/town_portal_scroll.jpg',
    id = v1()
  ) {
    this.id = id;
    this.name = name;
    this.img = image;
    this.include = include;
    this.selected = false;
  }

  changedSelected() {
    this.selected = !this.selected;
  }
  // getIdMainItem(items: Array<MainItem>, item: string) {
  //   const findItem = items.find(i => i.name === item);
  //   return findItem ? findItem.id : undefined;
  // }
}

export class ImproveItemsModel extends EventEmitter {
  items: Array<ImprovesItem>;
  selectItem: ImprovesItem | null;

  constructor() {
    super();
    this.items = [];
    this.selectItem = null;
  }

  setData(data: Array<ImprovesItem>, selectItem: ImprovesItem | null) {
    this.items = data;
    this.selectItem = selectItem;
    this.saveDataToLocalStorage();
  }

  getData() {
    return this.items;
  }

  saveDataToLocalStorage() {
    save('improvesItems', this.items);
    save('selectedImproveItem', this.selectItem);
  }

  selectedItem(id: string) {
    this.items = this.items.map(item => {
      if (item.id === id && !item.selected) {
        item.changedSelected();
        this.selectItem = item;
        return item;
      }
      return item;
    });
    this.saveDataToLocalStorage();
    globalEventEmitter.emit(IMPROVE_SELECTED_ITEMS_CHANGED, this.selectItem);
  }

  unSelectedItem(id: string) {
    this.items = this.items.map(item => {
      if (item.id === id) {
        item.changedSelected();
        return item;
      }
      return item;
    });
    this.selectItem = null;
    this.saveDataToLocalStorage();
    globalEventEmitter.emit(IMPROVE_SELECTED_ITEMS_CHANGED, this.selectItem);
  }

  addNewItem(data: any) {
    const newItem = new ItemImprove(data.name, data.mainItems);
    this.items = [...this.items, newItem];
    this.saveDataToLocalStorage();
    globalEventEmitter.emit(IMPROVE_SELECTED_ITEMS_CHANGED, this.selectItem);
  }
}
