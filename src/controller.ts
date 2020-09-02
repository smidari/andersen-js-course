import { globalEventEmitter, improvesItem } from './index';
import { mainItemType } from './view/MainItemView';
import  { dataRenderPageViewType } from './view/pageView';

type mainItemsModelType = {
  items: Array<mainItemType>;
  selectedItem: (id: string) => void;
};
type improvesItemsModelType = {
  items: Array<improvesItem>;
};
type ViewType = {
  render: (data: dataRenderPageViewType) => HTMLElement | null;
};

class Controller {
  mainItemsModel: mainItemsModelType;

  improvesItemsModel: improvesItemsModelType;

  view: ViewType;

  constructor(
    mainItemsModel: mainItemsModelType,
    improvesItemsModel: improvesItemsModelType,
    view: ViewType
  ) {
    this.mainItemsModel = mainItemsModel;
    this.improvesItemsModel = improvesItemsModel;
    this.view = view;

    globalEventEmitter.subscribe('selected', this.selectedMainItem.bind(this));
    view.render({ mainItems: mainItemsModel.items, improvesItems: improvesItemsModel.items });
  }

  selectedMainItem(id: { id: string }) {
    this.mainItemsModel.selectedItem(id.id);
    this.view.render({
      mainItems: this.mainItemsModel.items,
      improvesItems: this.improvesItemsModel.items,
    });
  }
}

export default Controller;
