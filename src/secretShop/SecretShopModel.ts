import { ImprovesItem, MainItem } from '../data/data';

export class SecretShopModel {
  improveItemSelected: ImprovesItem | {};

  mainItemsSelected: Array<MainItem>;

  constructor() {
    this.mainItemsSelected = [];
    this.improveItemSelected = {};
  }
}
