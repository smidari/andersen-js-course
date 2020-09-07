import { MainItem, mainItemsDefault } from '../data/data';
import { load } from '../utils/localStorageFunctions';
import { Item } from './mainItemsModel';

type MainItemsModelType = {
  items: Array<MainItem>;
  setData: (data: Array<MainItem>) => void;
  getData: () => Array<MainItem>;
};

type ViewType = {
  render: (data: Array<MainItem>) => HTMLElement | null;
};

export class MainItemsController {
  model: MainItemsModelType;

  view: ViewType;

  constructor(model: MainItemsModelType, view: ViewType) {
    this.model = model;
    this.view = view;

    model.setData(this.getDataFromLocalStorage());
    view.render(this.model.getData());
  }

  getDataFromLocalStorage() {
    return load('mainItems')
      ? load('mainItems')
      : mainItemsDefault.map(item => {
          return Object.assign(new Item(item.name, item.img), item);
        });
  }
}
