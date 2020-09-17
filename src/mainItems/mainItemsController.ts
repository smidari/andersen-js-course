import { MainItem, mainItemsDefault } from '../data/data';
import { load } from '../utils/localStorageFunctions';
import { MainItemsModel } from './mainItemsModel';
import { DROP_START } from '../utils/eventEmiter/events';
import { MainItemsView } from './mainItemsView';
import { MAIN_ITEMS } from '../utils/localStorage/const';
import { ItemMain } from './mainitem';

export class MainItemsController {
  model: MainItemsModel;
  view: MainItemsView;

  constructor(model: MainItemsModel, view: MainItemsView) {
    this.model = model;
    this.view = view;

    view.subscribe(DROP_START, this.dropStartMainItem);

    model.items = this.getItemsFromLocalStorage();
    view.render(this.model.items);
  }

  dropStartMainItem = (data: { id: string }) => this.model.getDropStartItemById(data.id);

  getItemsFromLocalStorage(): Array<MainItem> {
    return load(MAIN_ITEMS)
      ? load(MAIN_ITEMS).map(
          (item: { id: string; name: string; img: string; selected: boolean }) =>
            new ItemMain(item.name, item.img, item.id)
        )
      : mainItemsDefault.map(item => {
          return new ItemMain(item.name, item.img);
        });
  }
}
