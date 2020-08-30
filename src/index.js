import './styles/main.css';
import { v1 } from 'uuid';
import { save, load } from './helper';
import Model from './model';
import View from './view';
import Controller from './controller';

const mainItems = [
  {
    id: v1(),
    name: 'Boots of Speed',
    img: 'http://dota2-i.ru/img/items/004/boots_of_speed.jpg',
  },
  {
    id: v1(),
    name: 'Energy Booster',
    img: 'http://dota2-i.ru/img/items/011/energy_booster.jpg',
  },
];
const improvesItems = [
  {
    id: v1(),
    name: 'Arcane Boots',
    include: ['Boots of Speed ', 'Energy Booster'],
    img: 'http://dota2-i.ru/img/items/006/arcane_boots.jpg',
  },
];

save('mainItems', mainItems);
save('improvesItems', improvesItems);

const state = {
  mainItems: load('mainItems'),
  improvesItems: load('improvesItems'),
};

const model = new Model(state || undefined);

const view = new View();

// eslint-disable-next-line no-unused-vars
const controller = new Controller(model, view);
