import { SecretShopView } from './SecretShopView';
import {
  CHECK,
  DROP_IMPOVE_ITEM_SUCCSESS,
  DROP_SUCCSESS,
  SUCCSESS_CRAFT_ITEM,
} from '../utils/eventEmiter/events';
import { load } from '../utils/localStorageFunctions';
import { globalEventEmitter } from '../index';
import { SecretShopModel } from './SecretShopModel';
import { ImprovesItem, MainItem } from '../data/data';

export class SecretShopController {
  model: SecretShopModel;
  view: SecretShopView;

  constructor(model: SecretShopModel, view: SecretShopView) {
    this.model = model;
    this.view = view;

    view.subscribe(CHECK, this.check);

    view.subscribe('removeMainElement', this.removeMainElement);
    view.subscribe('removeImproveElement', this.removeImproveElement);
    view.subscribe(DROP_SUCCSESS, this.dropSuccess);
    view.subscribe(DROP_IMPOVE_ITEM_SUCCSESS, this.dropImproveItemSuccess);
    globalEventEmitter.subscribe('dropItem', this.dropItemForTable);
    globalEventEmitter.subscribe('dropGlobalImproveItem', this.dropImproveItemForTable);
    model.subscribe(SUCCSESS_CRAFT_ITEM, this.successCraftItem);

    model.setMyItems(this.getMyItemsFromLS());
    view.render({
      improveItemSelected: this.model.improveItemSelected,
      mainItemsSelected: this.model.mainItemsSelected,
      myItems: this.model.getMyItems(),
    });
  }

  getMyItemsFromLS = () => (load('myItems') ? load('myItems') : []);

  check = () => this.model.checkItems();

  successCraftItem = () => {
    this.view.render({
      improveItemSelected: this.model.improveItemSelected,
      mainItemsSelected: this.model.mainItemsSelected,
      myItems: this.model.myItems,
    });
  };

  dropItemForTable = (dropItem: any) => this.view.setDropItem(dropItem);

  dropImproveItemForTable = (dropImproveItem: ImprovesItem) =>
    this.view.setDropImproveItem(dropImproveItem);

  dropSuccess = (dropItem: MainItem) => this.model.dropSuccess(dropItem);

  dropImproveItemSuccess = (dropItem: ImprovesItem) => this.model.dropImproveItemSuccess(dropItem);

  removeMainElement = (data: { id: string }) => this.model.removeMainItem(data.id);

  removeImproveElement = () => this.model.removeImproveItem();
}
