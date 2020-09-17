import { ImproveItemDefault, ImprovesItem, improvesItemsDefault, MainItem } from '../data/data';
import { load } from '../utils/localStorageFunctions';
import { ImproveItemsModel } from './ImproveItemsModel';
import { ADD_NEW_ITEM, DROP_START_IMPROVE_ITEM } from '../utils/eventEmiter/events';
import { ImproveItemsView } from './ImproveItemsView';
import { IMPROVES_ITEMS, MAIN_ITEMS, MY_ITEMS } from '../utils/localStorage/const';
import { ItemImprove } from './improveItem';

export class ImproveItemsController {
  model: ImproveItemsModel;
  view: ImproveItemsView;

  constructor(model: ImproveItemsModel, view: ImproveItemsView) {
    this.model = model;
    this.view = view;

    view.subscribe(DROP_START_IMPROVE_ITEM, this.dropImproveItem);
    view.subscribe(ADD_NEW_ITEM, this.addNewItem);
    model.items = this.getItemsFromLocalStorage();
    view.render(this.model.items, this.getMainItemsFromLocalStorage());
  }

  getItemsFromLocalStorage() {
    // change the name to the id in the include property
    let selectedImproveItems: Array<ImproveItemDefault> = improvesItemsDefault;
    const mainItems: Array<MainItem> = load(MAIN_ITEMS);
    console.log(mainItems);
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

    return load(IMPROVES_ITEMS)
      ? load(IMPROVES_ITEMS).map(
          (item: { name: string; img: string; include: string[]; id: string | undefined }) =>
            new ItemImprove(item.name, item.include, item.img, item.id)
        )
      : selectedImproveItems.map(item => {
          return new ItemImprove(item.name, item.include, item.img);
        });
  }

  getMainItemsFromLocalStorage = () => (load(MAIN_ITEMS) ? load(MAIN_ITEMS) : []);

  addNewItem = (data: ImprovesItem) => {
    this.model.addNewItem(data);
    this.view.render(this.model.items, this.getMainItemsFromLocalStorage());
  };

  dropImproveItem = (data: { id: string }) => this.model.getDropStartItemById(data.id);
}
