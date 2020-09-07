import { ImprovesItem, improvesItemsDefault } from '../data/data';
import { load } from '../utils/localStorageFunctions';
import { Item } from '../mainItems/mainItemsModel';

type improvesItemsModelType = {
  items: Array<ImprovesItem>;
  setData: (data: Array<ImprovesItem>) => void;
  getData: () => Array<ImprovesItem>;
};
type ViewType = {
  render: (data: Array<ImprovesItem>) => HTMLElement | null;
};

export class ImproveItemsController {
  model: improvesItemsModelType;

  view: ViewType;

  constructor(model: improvesItemsModelType, view: ViewType) {
    this.model = model;
    this.view = view;

    model.setData(this.getDataFromLocalStorage());
    view.render(this.model.getData());
  }

  getDataFromLocalStorage() {
    return load('improvesItems')
      ? load('improvesItems')
      : improvesItemsDefault.map(item => {
          return Object.assign(new Item(item.name, item.img), item);
        });
  }
}
