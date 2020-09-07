import { v1 } from 'uuid';
import { MainItem } from '../data/data';
import { save } from '../utils/localStorageFunctions';

export class MainItemsModel {
  items: Array<MainItem>;

  constructor() {
    this.items = [];
  }

  setData(data: Array<MainItem>) {
    this.items = data;
    this.saveDataToLocalStorage();
  }

  getData() {
    return this.items;
  }

  saveDataToLocalStorage() {
    save('mainItems', this.items);
  }
}
export class Item {
  id: string;

  name: string;

  img: string;

  selected: boolean;

  constructor(name: string, image: string) {
    this.id = v1();
    this.name = name;
    this.img = image;
    this.selected = false;
  }
}
