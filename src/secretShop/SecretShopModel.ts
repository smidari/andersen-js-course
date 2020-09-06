import { SelectedItems } from './SecretShopView';

export class SecretShopModel {
  items: SelectedItems;

  constructor(items: SelectedItems) {
    this.items = items;
  }
}
