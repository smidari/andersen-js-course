import { v1 } from 'uuid';
import { ImprovesItem, MainItem } from '../data/data';

export class SecretShopModel {
  improveItemSelected: ImprovesItem | null;
  mainItemsSelected: Array<MainItem>;

  constructor() {
    this.mainItemsSelected = [];
    this.improveItemSelected = null;
  }

  setData(data: Array<MainItem>) {
    this.mainItemsSelected = data;
  }

  setImproveItem(improveItem: ImprovesItem | null) {
    this.improveItemSelected = improveItem;
  }

  getData() {
    return this.mainItemsSelected;
  }

  getSelectImproveItem() {
    return this.improveItemSelected;
  }

  checkItems() {
    if (this.improveItemSelected && this.mainItemsSelected.length > 1) {
      // eslint-disable-next-line no-unused-expressions
      // @ts-ignore
      this.mainItemsSelected.every(item => this.improveItemSelected.include.includes(item.id))
        ? alert('Success')
        : alert('Error');
    } else {
      alert('Error');
    }
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
