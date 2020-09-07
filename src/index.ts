import './styles/main.css';
import { MainItemsModel } from './mainItems/mainItemsModel';
import { MainItemsView } from './mainItems/mainItemsView';
import { MainItemsController } from './mainItems/mainItemsController';
import { ImproveItemsModel } from './improveItems/ImproveItemsModel';
import { ImproveItemsView } from './improveItems/ImproveItemsView';
import { ImproveItemsController } from './improveItems/ImproveItemsController';
import { SecretShopController } from './secretShop/SecretShopController';
import { SecretShopView } from './secretShop/SecretShopView';
import { SecretShopModel } from './secretShop/SecretShopModel';

const mainItemsModel = new MainItemsModel();
const mainItemsView = new MainItemsView();
const mainItemsController = new MainItemsController(mainItemsModel, mainItemsView);

const secretShopModel = new SecretShopModel();
const secretShopView = new SecretShopView();
const secretShopController = new SecretShopController(secretShopModel, secretShopView);

const improveItemsModel = new ImproveItemsModel();
const improveItemsView = new ImproveItemsView();
const improveItemsController = new ImproveItemsController(improveItemsModel, improveItemsView);
