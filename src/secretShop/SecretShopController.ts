import { SelectedItems } from './SecretShopView';
import { ImprovesItem, MainItem } from '../data/data';

type SecretShopModelType = {
  improveItemSelected: ImprovesItem | {};
  mainItemsSelected: Array<MainItem> | [];
};

type ViewType = {
  render: (data: SelectedItems) => HTMLElement | null;
};

export class SecretShopController {
  model: SecretShopModelType;

  view: ViewType;

  constructor(model: SecretShopModelType, view: ViewType) {
    this.model = model;
    this.view = view;

    view.render({
      mainItemsSelected: this.model.mainItemsSelected,
      improveItemSelected: this.model.improveItemSelected,
    });
  }
}
