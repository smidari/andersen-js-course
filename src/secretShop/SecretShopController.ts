import { SecretShopView } from './SecretShopView';
import {
  CHECK,
  IMPROVE_SELECTED_ITEMS_CHANGED,
  MAIN_SELECTED_ITEMS_CHANGED,
} from '../utils/eventEmiter/events';
import { load } from '../utils/localStorageFunctions';
import { Item } from '../mainItems/mainItemsModel';
import { globalEventEmitter } from '../index';
import { SecretShopModel } from './SecretShopModel';
import { ItemImprove } from '../improveItems/ImproveItemsModel';

export class SecretShopController {
  model: SecretShopModel;
  view: SecretShopView;

  constructor(model: SecretShopModel, view: SecretShopView) {
    this.model = model;
    this.view = view;

    view.subscribe(CHECK, this.check.bind(this));
    globalEventEmitter.subscribe(
      MAIN_SELECTED_ITEMS_CHANGED,
      this.changeSelectedMainItems.bind(this)
    );
    globalEventEmitter.subscribe(
      IMPROVE_SELECTED_ITEMS_CHANGED,
      this.changeSelectedImproveItems.bind(this)
    );

    model.setData(this.getSelectedMainItemsFromLocalStorage());
    model.setImproveItem(this.getSelectedImproveItemsFromLS());
    view.render({
      improveItemSelected: this.model.improveItemSelected,
      mainItemsSelected: this.model.mainItemsSelected,
    });
  }

  getSelectedMainItemsFromLocalStorage() {
    return load('selectedMainItems')
      ? load('selectedMainItems').map(
          (item: { id: string; name: string; img: string; selected: boolean }) =>
            new Item(item.name, item.img, item.id)
        )
      : [];
  }

  getSelectedImproveItemsFromLS() {
    const newItem = load('selectedImproveItem');
    return newItem ? new ItemImprove(newItem.name, newItem.include, newItem.img, newItem.id) : null;
  }

  changeSelectedMainItems() {
    this.model.setData(this.getSelectedMainItemsFromLocalStorage());
    this.view.render({
      mainItemsSelected: this.model.getData(),
      improveItemSelected: this.model.getSelectImproveItem(),
    });
  }

  changeSelectedImproveItems() {
    this.model.setImproveItem(this.getSelectedImproveItemsFromLS());
    this.view.render({
      mainItemsSelected: this.model.getData(),
      improveItemSelected: this.model.getSelectImproveItem(),
    });
  }

  check() {
    this.model.checkItems();
  }
}
