import { MainItem, mainItemsDefault } from '../data/data';
import { load } from '../utils/localStorageFunctions';
import { Item, MainItemsModelType } from './mainItemsModel';
import { SELECTED, UN_SELECTED_MAIN_ITEM } from '../utils/eventEmiter/events';
import { globalEventEmitter } from '../index';
import { MainItemsViewType } from './mainItemsView';

export class MainItemsController {
  model: MainItemsModelType;
  view: MainItemsViewType;

  constructor(model: MainItemsModelType, view: MainItemsViewType) {
    this.model = model;
    this.view = view;

    view.subscribe(SELECTED, this.selectedMainItem.bind(this));

    globalEventEmitter.subscribe(UN_SELECTED_MAIN_ITEM, this.unSelectedMainItem.bind(this));
    model.setData(this.getItemsFromLocalStorage(), this.getSelectedItemsFromLocalStorage());
    view.render(this.model.items);
  }

  getItemsFromLocalStorage(): Array<MainItem> {
    return load('mainItems')
      ? load('mainItems').map(
          (item: { id: string; name: string; img: string; selected: boolean }) =>
            new Item(item.name, item.img, item.id)
        )
      : mainItemsDefault.map(item => {
          return new Item(item.name, item.img);
        });
  }

  getSelectedItemsFromLocalStorage() {
    return load('selectedMainItems') ? load('selectedMainItems') : [];
  }

  selectedMainItem(data: { id: string }) {
    this.model.selectedItem(data.id);
  }

  unSelectedMainItem(data: { id: string }) {
    this.model.unSelectedItem(data.id);
  }
}
