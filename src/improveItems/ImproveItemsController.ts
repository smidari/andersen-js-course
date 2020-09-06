import { ImprovesItem } from '../data/data';
import { globalEventEmitter } from '../index';

type improvesItemsModelType = {
  items: Array<ImprovesItem>;
  selectedItem: (id: string) => void;
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

    globalEventEmitter.subscribe('selectedImproveItem', this.selectedImproveItem.bind(this));
    view.render(model.items);
  }

  selectedImproveItem(id: { id: string }) {
    this.model.selectedItem(id.id);
    this.view.render(this.model.items);
  }
}
