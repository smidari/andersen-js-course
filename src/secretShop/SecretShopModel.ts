import { v1 } from 'uuid';
import { ImprovesItem, MainItem } from '../data/data';
import { EventEmitter } from '../utils/eventEmiter/EventEmiter';
import { SUCCSESS_CRAFT_ITEM } from '../utils/eventEmiter/events';
import { save } from '../utils/localStorageFunctions';
import { DROP_SUCCESS_MAIN_ITEMS, MY_ITEMS } from '../utils/localStorage/const';

export class SecretShopModel extends EventEmitter {
  improveItemSelected: ImprovesItem | null;
  mainItemsSelected: Array<MainItem>;
  myItems: Array<ImprovesItem>;

  constructor() {
    super();
    this.mainItemsSelected = [];
    this.improveItemSelected = null;
    this.myItems = [];
  }

  setData(data: Array<MainItem>) {
    this.mainItemsSelected = data;
  }

  setImproveItem(improveItem: ImprovesItem | null) {
    this.improveItemSelected = improveItem;
  }

  setMyItems(items: Array<ImprovesItem>) {
    this.myItems = items;
  }

  getData() {
    return this.mainItemsSelected;
  }

  getSelectImproveItem() {
    return this.improveItemSelected;
  }

  getMyItems() {
    return this.myItems;
  }

  checkItems() {
    if (this.improveItemSelected && this.mainItemsSelected.length > 1) {
      if (
        this.mainItemsSelected.every(item => this.improveItemSelected.include.includes(item.id))
      ) {
        this.myItems = [...this.myItems, this.improveItemSelected];
        save(MY_ITEMS, this.myItems);
        this.emit(SUCCSESS_CRAFT_ITEM, this.improveItemSelected);
        this.mainItemsSelected = [];
        this.improveItemSelected = null;
      } else {
        alert('Error');
      }
    } else {
      alert('Error');
    }
  }

  dropSuccess(item: any) {
    this.mainItemsSelected = [...this.mainItemsSelected, item];
    save('dropSuccssesMainItems', this.mainItemsSelected);
  }

  dropImproveItemSuccess(item: any) {
    this.improveItemSelected = item;
    save('dropSuccssesImproveItem', this.improveItemSelected);
  }

  removeMainItem(id: string) {
    this.mainItemsSelected = this.mainItemsSelected.filter(item => item.id !== id);
    save(DROP_SUCCESS_MAIN_ITEMS, this.mainItemsSelected);
  }

  removeImproveItem() {
    this.improveItemSelected = null;
    save('dropSuccssesImproveItem', this.improveItemSelected);
  }
}

export class ImproveItem {
  id: string;
  name: string;
  img: string;
  selected: boolean;
  include: Array<string>;

  constructor(name: string, image: string, id = v1(), include: Array<string>) {
    this.id = id;
    this.name = name;
    this.img = image;
    this.selected = false;
    this.include = include;
  }
}
