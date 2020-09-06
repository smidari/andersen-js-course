// import { globalEventEmitter, improvesItem } from './index';
// import { mainItemType } from './view/MainItemaView';
// import { dataRenderPageViewType } from './view/pageView';
//
// type mainItemsModelType = {
//   items: Array<mainItemType>;
//   selectedItem: (id: string) => void;
// };
// type improvesItemsModelType = {
//   items: Array<improvesItem>;
//   selectedItem: (id: string) => void;
// };
// type ViewType = {
//   render: (data: dataRenderPageViewType) => HTMLElement | null;
// };
//
// class Controller {
//   improvesItemsModel: improvesItemsModelType;
//
//   view: ViewType;
//
//   constructor(improvesItemsModel: improvesItemsModelType, view: ViewType) {
//     this.improvesItemsModel = improvesItemsModel;
//     this.view = view;
//
//     globalEventEmitter.subscribe('selectedImproveItem', this.selectedImproveItem.bind(this));
//     view.render({ improvesItems: improvesItemsModel.items });
//   }
//
//   selectedImproveItem(id: { id: string }) {
//     this.improvesItemsModel.selectedItem(id.id);
//     this.view.render({
//       improvesItems: this.improvesItemsModel.items,
//     });
//   }
// }

// eslint-disable-next-line no-undef
const Controller: never[] = [];
export default Controller;
