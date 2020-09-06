import { SelectedItems } from './SecretShopView';

type SecretShopModelType = {
  items: SelectedItems;
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

    view.render(this.model.items);
  }
}
