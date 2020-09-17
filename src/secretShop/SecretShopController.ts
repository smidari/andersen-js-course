import { SecretShopView } from './SecretShopView';
import {
  CHECK,
  DROP_IMPOVE_ITEM_SUCCESS,
  DROP_START_MAIN_ITEM_FOR_CRAFT_TABLE,
  DROP_MAIN_ITEM_SUCCESS,
  SUCCSESS_CRAFT_ITEM,
  REMOVE_DROP_MAIN_ELEMENT,
  REMOVE_DROP_IMPROVE_ELEMENT,
  DROP_START_IMPROVE_ITEM_FOR_CRAFT_TABLE,
} from '../utils/eventEmiter/events';
import { load } from '../utils/localStorageFunctions';
import { globalEventEmitter } from '../index';
import { SecretShopModel } from './SecretShopModel';
import { ImprovesItem, MainItem } from '../data/data';
import { MY_ITEMS } from '../utils/localStorage/const';

export class SecretShopController {
  model: SecretShopModel;
  view: SecretShopView;

  constructor(model: SecretShopModel, view: SecretShopView) {
    this.model = model;
    this.view = view;

    view.subscribe(CHECK, this.check);
    view.subscribe(DROP_MAIN_ITEM_SUCCESS, this.dropSuccess);
    view.subscribe(DROP_IMPOVE_ITEM_SUCCESS, this.dropImproveItemSuccess);
    view.subscribe(REMOVE_DROP_MAIN_ELEMENT, this.removeMainElement);
    view.subscribe(REMOVE_DROP_IMPROVE_ELEMENT, this.removeImproveElement);
    globalEventEmitter.subscribe(DROP_START_MAIN_ITEM_FOR_CRAFT_TABLE, this.dropItemForTable);
    globalEventEmitter.subscribe(
      DROP_START_IMPROVE_ITEM_FOR_CRAFT_TABLE,
      this.dropImproveItemForTable
    );
    model.subscribe(SUCCSESS_CRAFT_ITEM, this.successCraftItem);

    model.setMyItems(this.getMyItemsFromLS());
    view.render({
      improveItemSelected: this.model.improveItemSelected,
      mainItemsSelected: this.model.mainItemsSelected,
      myItems: this.model.getMyItems(),
    });
  }

  getMyItemsFromLS = () => (load(MY_ITEMS) ? load(MY_ITEMS) : []);

  check = () => this.model.checkItems();

  successCraftItem = () => {
    this.view.render({
      improveItemSelected: this.model.improveItemSelected,
      mainItemsSelected: this.model.mainItemsSelected,
      myItems: this.model.myItems,
    });
  };

  dropItemForTable = (dropItem: MainItem) => this.view.setDropItem(dropItem);

  dropImproveItemForTable = (dropImproveItem: ImprovesItem) =>
    this.view.setDropImproveItem(dropImproveItem);

  dropSuccess = (dropItem: MainItem) => this.model.dropSuccess(dropItem);

  dropImproveItemSuccess = (dropItem: ImprovesItem) => this.model.dropImproveItemSuccess(dropItem);

  removeMainElement = (data: { id: string }) => this.model.removeMainItem(data.id);

  removeImproveElement = () => this.model.removeImproveItem();
}
