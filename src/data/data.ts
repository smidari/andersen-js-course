import { v1 } from 'uuid';

export type MainItem = {
  id: string;
  name: string;
  img: string;
  selected: boolean;
};
export type ImprovesItem = {
  id: string;
  name: string;
  include: Array<string>;
  img: string;
  selected: boolean;
};

export const mainItems: Array<MainItem> = [
  {
    id: '1',
    name: 'Boots of Speed',
    img: 'http://dota2-i.ru/img/items/004/boots_of_speed.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Energy Booster',
    img: 'http://dota2-i.ru/img/items/011/energy_booster.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Iron Branch ',
    img: 'http://dota2-i.ru/img/items/003/chainmail.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Chainmail',
    img: 'http://dota2-i.ru/img/items/002/iron_branch.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Ring of Regen',
    img: 'http://dota2-i.ru/img/items/004/ring_of_regen.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: "Sage's Mask",
    img: 'http://dota2-i.ru/img/items/004/sages_mask.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Cloak',
    img: 'http://dota2-i.ru/img/items/004/cloak.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Ring of Health',
    img: 'http://dota2-i.ru/img/items/011/ring_of_health.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Broadsword',
    img: 'http://dota2-i.ru/img/items/003/broadsword.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Robe of the Magi',
    img: 'http://dota2-i.ru/img/items/002/robe_of_the_magi.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Robe of the Magi',
    img: 'http://dota2-i.ru/img/items/011/point_booster.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Point Booster ',
    img: 'http://dota2-i.ru/img/items/011/vitality_booster.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Mithril Hammer',
    img: 'http://dota2-i.ru/img/items/003/mithril_hammer.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Ogre Club',
    img: 'http://dota2-i.ru/img/items/002/ogre_club.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Ultimate Orb',
    img: 'http://dota2-i.ru/img/items/002/ultimate_orb.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Reaver',
    img: 'http://dota2-i.ru/img/items/011/reaver.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Gloves of Haste',
    img: 'http://dota2-i.ru/img/items/004/gloves_of_haste.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Mithril Hammer',
    img: 'http://dota2-i.ru/img/items/003/blades_of_attack.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Belt of Strength',
    img: 'http://dota2-i.ru/img/items/002/belt_of_strength.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Void Stone',
    img: 'http://dota2-i.ru/img/items/011/void_stone.jpg',
    selected: false,
  },
];
export const improvesItems: Array<ImprovesItem> = [
  {
    id: v1(),
    name: 'Arcane Boots',
    include: ['Boots of Speed ', 'Energy Booster'],
    img: 'http://dota2-i.ru/img/items/006/arcane_boots.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Medallion of courage',
    include: ["Sage's Mask", 'Chainmail'],
    img: 'http://dota2-i.ru/img/items/006/medallion_of_courage.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Headdress',
    include: ['Ring of Regen', 'Iron Branch'],
    img: 'http://dota2-i.ru/img/items/006/headdress.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'HOOD OF DEFIANCE',
    include: ['Ring of Regen', 'Ring of Health ', 'Cloak'],
    img: 'http://dota2-i.ru/img/items/009/hood_of_defiance.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Soul booster',
    include: ['Ring of Regen', 'Vitality Booster', 'Energy Booster'],
    img: 'http://dota2-i.ru/img/items/009/hood_of_defiance.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Blad Mail',
    include: ['Point Booster', 'Chainmail', 'Robe of the Magi'],
    img: 'http://dota2-i.ru/img/items/009/blade_mail.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Maelstorm',
    include: ['Gloves of Haste', 'Mithril Hammer'],
    img: 'http://dota2-i.ru/img/items/010/maelstrom.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Desolator',
    include: ['Mithril Hammer', 'Mithril Hammer'],
    img: 'http://dota2-i.ru/img/items/010/desolator.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'BKB',
    include: ['Mithril Hammer', 'Ogre Club'],
    img: 'http://dota2-i.ru/img/items/009/black_king_bar.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Sange',
    include: ['Belt of Strength', 'Ogre Club'],
    img: 'http://dota2-i.ru/img/items/010/sange.jpg',
    selected: false,
  },
  {
    id: v1(),
    name: 'Perseverance',
    include: ['Void Stone', 'Ring of Health'],
    img: 'http://dota2-i.ru/img/items/005/perseverance.jpg',
    selected: false,
  },
];

export const secretShopMainItems: Array<MainItem> = [];
export const secretShopImproveItem: Array<ImprovesItem> = [];
