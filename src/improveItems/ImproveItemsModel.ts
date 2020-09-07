import { ImprovesItem } from '../data/data';
import { save } from '../utils/localStorageFunctions';

export class ImproveItemsModel {
  items: Array<ImprovesItem>;

  constructor() {
    this.items = [];
  }

  setData(data: Array<ImprovesItem>) {
    this.items = data;
    this.saveDataToLocalStorage();
  }

  getData() {
    return this.items;
  }

  saveDataToLocalStorage() {
    save('improvesItems', this.items);
  }
}
