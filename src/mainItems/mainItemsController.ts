import { MainItem } from '../data/data';
import { globalEventEmitter } from '../index';

type MainItemsModelType = {
  items: Array<MainItem>;
  selectedItem: (id: string) => void;
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

    globalEventEmitter.subscribe('selected', this.selectedMainItem.bind(this));
    view.render(this.model.items);
  }

  selectedMainItem(id: { id: string }) {
    this.model.selectedItem(id.id);
    this.view.render(this.model.items);
  }
}
