import { ImproveItemDefault, improvesItemsDefault, MainItem } from '../data/data';
import { load } from '../utils/localStorageFunctions';
import { ImproveItemsModel, ItemImprove } from './ImproveItemsModel';
import {
  ADD_NEW_ITEM,
  IMPROVE_SELECTED_ITEMS_CHANGED,
  SELECTED_IMPROVE_ITEM,
  UN_SELECTED_IMPROVE_ITEM,
} from '../utils/eventEmiter/events';
import { globalEventEmitter } from '../index';
import { ImproveItemsView } from './ImproveItemsView';
import { SecretShopModel } from '../secretShop/SecretShopModel';

// type improvesItemsModelType = {
//   items: Array<ImprovesItem>;
//   setData: (data: Array<ImprovesItem>, selectItem: ImprovesItem | null) => void;
//   getData: () => Array<ImprovesItem>;
//   selectedItem: (id: string) => void;
//   subscribe: (event: string, func: any) => void;
//   unSelectedItem: (id: string) => void;
// };
// type ViewType = {
//   render: (data: Array<ImprovesItem>) => HTMLElement;
//   subscribe: (event: string, func: any) => void;
// };

export class ImproveItemsController {
  model: ImproveItemsModel;
  view: ImproveItemsView;

  constructor(model: ImproveItemsModel, view: ImproveItemsView) {
    this.model = model;
    this.view = view;

    view.subscribe(SELECTED_IMPROVE_ITEM, this.selectedImproveItem.bind(this));
    view.subscribe(ADD_NEW_ITEM, this.addNewItem.bind(this));
    globalEventEmitter.subscribe(UN_SELECTED_IMPROVE_ITEM, this.unSelectedImproveItem.bind(this));
    model.setData(this.getItemsFromLocalStorage(), this.getSelectedItemFromLocalStorage());
    view.render(this.model.getData(), this.getMainItemsFromLocalStorage());
  }

  getItemsFromLocalStorage() {
    let selectedImproveItems: Array<ImproveItemDefault> = improvesItemsDefault;
    const mainItems: Array<MainItem> = load('mainItems');
    selectedImproveItems = selectedImproveItems.map(item => {
      item.include = item.include.map(nameItem => {
        if (mainItems) {
          const findItem = mainItems.find(elem => elem.name === nameItem);
          if (findItem) {
            nameItem = findItem.id;
          }
          return nameItem;
        }
        return nameItem;
      });
      return item;
    });

    return load('improvesItems')
      ? load('improvesItems').map(
          (item: { name: string; img: string; include: string[]; id: string | undefined }) =>
            new ItemImprove(item.name, item.include, item.img, item.id)
        )
      : selectedImproveItems.map(item => {
          return new ItemImprove(item.name, item.include, item.img);
        });
  }

  getSelectedItemFromLocalStorage() {
    const newItem = load('selectedImproveItem');
    return newItem ? new ItemImprove(newItem.name, newItem.include, newItem.img, newItem.id) : null;
  }

  getMainItemsFromLocalStorage() {
    return load('mainItems') ? load('mainItems') : [];
  }

  selectedImproveItem(data: { id: string }) {
    this.model.selectedItem(data.id);
  }

  unSelectedImproveItem(data: { id: string }) {
    this.model.unSelectedItem(data.id);
  }

  addNewItem(data: any) {
    this.model.addNewItem(data);
    this.view.render(this.model.getData(), this.getMainItemsFromLocalStorage());
  }
}
