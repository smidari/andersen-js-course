// import * as _ from 'lodash';
import './styles/main.css';
import {
  improvesItems,
  MainItem,
  mainItems,
  secretShopImproveItem,
  secretShopMainItems,
} from './data/data';
import { MainItemsModel } from './mainItems/mainItemsModel';
import { MainItemsView } from './mainItems/mainItemsView';
import { MainItemsController } from './mainItems/mainItemsController';
import { ImproveItemsModel } from './improveItems/ImproveItemsModel';
import { ImproveItemsView } from './improveItems/ImproveItemsView';
import { ImproveItemsController } from './improveItems/ImproveItemsController';
import { SecretShopController } from './secretShop/SecretShopController';
import { SecretShopView } from './secretShop/SecretShopView';
import { SecretShopModel } from './secretShop/SecretShopModel';
import { load, save } from './utils/localStorageFunctions';
import { EventEmitter } from './utils/EventEmiter';

save('mainItems', mainItems);
save('improvesItems', improvesItems);
save('secretShopMainItems', secretShopMainItems);
save('secretShopImproveItem', secretShopImproveItem);
const secretShopItems = {
  improveItem: load('secretShopImproveItem'),
  mainItems: load('secretShopMainItems'),
};
export const globalEventEmitter = new EventEmitter();

globalEventEmitter.subscribe('changeMainItems', (state: Array<MainItem>) =>
  save('mainItems', state)
);
// globalEventEmitter.subscribe('changeImprovesItems', (state: Array<improvesItem>) =>
//   save('improvesItems', state)
// );
//
const mainItemsModel = new MainItemsModel(load('mainItems') || undefined);
const mainItemsView = new MainItemsView();
const mainItemsController = new MainItemsController(mainItemsModel, mainItemsView);

const secretShopModel = new SecretShopModel(secretShopItems || undefined);
const secretShopView = new SecretShopView();
const secretShopController = new SecretShopController(secretShopModel, secretShopView);

const improveItemsModel = new ImproveItemsModel(load('mainItems') || undefined);
const improveItemsView = new ImproveItemsView();
const improveItemsController = new ImproveItemsController(improveItemsModel, improveItemsView);

// const improvesItemsModel = new ModelImprovesItems(load('improvesItems') || undefined);
//
// const view = new PageView();
//
// // eslint-disable-next-line no-unused-vars
// const controller = new Controller(mainItemsModel, improvesItemsModel, view);
