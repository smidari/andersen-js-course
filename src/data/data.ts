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
export type MainItemDefault = {
  name: string;
  img: string;
};

export type ImproveItemDefault = {
  name: string;
  include: Array<string>;
  img: string;
};

export const mainItemsDefault: Array<MainItemDefault> = [
  {
    name: 'Boots of Speed',
    img: 'http://dota2-i.ru/img/items/004/boots_of_speed.jpg',
  },
  {
    name: 'Energy Booster',
    img: 'http://dota2-i.ru/img/items/011/energy_booster.jpg',
  },
  {
    name: 'Iron Branch ',
    img: 'http://dota2-i.ru/img/items/003/chainmail.jpg',
  },
  {
    name: 'Chainmail',
    img: 'http://dota2-i.ru/img/items/002/iron_branch.jpg',
  },
  {
    name: 'Ring of Regen',
    img: 'http://dota2-i.ru/img/items/004/ring_of_regen.jpg',
  },
  {
    name: "Sage's Mask",
    img: 'http://dota2-i.ru/img/items/004/sages_mask.jpg',
  },
  {
    name: 'Cloak',
    img: 'http://dota2-i.ru/img/items/004/cloak.jpg',
  },
  {
    name: 'Ring of Health',
    img: 'http://dota2-i.ru/img/items/011/ring_of_health.jpg',
  },
  {
    name: 'Broadsword',
    img: 'http://dota2-i.ru/img/items/003/broadsword.jpg',
  },
  {
    name: 'Robe of the Magi',
    img: 'http://dota2-i.ru/img/items/002/robe_of_the_magi.jpg',
  },
  {
    name: 'Robe of the Magi',
    img: 'http://dota2-i.ru/img/items/011/point_booster.jpg',
  },
  {
    name: 'Point Booster ',
    img: 'http://dota2-i.ru/img/items/011/vitality_booster.jpg',
  },
  {
    name: 'Mithril Hammer',
    img: 'http://dota2-i.ru/img/items/003/mithril_hammer.jpg',
  },
  {
    name: 'Ogre Club',
    img: 'http://dota2-i.ru/img/items/002/ogre_club.jpg',
  },
  {
    name: 'Ultimate Orb',
    img: 'http://dota2-i.ru/img/items/002/ultimate_orb.jpg',
  },
  {
    name: 'Reaver',
    img: 'http://dota2-i.ru/img/items/011/reaver.jpg',
  },
  {
    name: 'Gloves of Haste',
    img: 'http://dota2-i.ru/img/items/004/gloves_of_haste.jpg',
  },
  {
    name: 'Mithril Hammer',
    img: 'http://dota2-i.ru/img/items/003/blades_of_attack.jpg',
  },
  {
    name: 'Belt of Strength',
    img: 'http://dota2-i.ru/img/items/002/belt_of_strength.jpg',
  },
  {
    name: 'Void Stone',
    img: 'http://dota2-i.ru/img/items/011/void_stone.jpg',
  },
];
export const improvesItemsDefault: Array<ImproveItemDefault> = [
  {
    name: 'Arcane Boots',
    include: ['Boots of Speed ', 'Energy Booster'],
    img: 'http://dota2-i.ru/img/items/006/arcane_boots.jpg',
  },
  {
    name: 'Medallion of courage',
    include: ["Sage's Mask", 'Chainmail'],
    img: 'http://dota2-i.ru/img/items/006/medallion_of_courage.jpg',
  },
  {
    name: 'Headdress',
    include: ['Ring of Regen', 'Iron Branch'],
    img: 'http://dota2-i.ru/img/items/006/headdress.jpg',
  },
  {
    name: 'HOOD OF DEFIANCE',
    include: ['Ring of Regen', 'Ring of Health ', 'Cloak'],
    img: 'http://dota2-i.ru/img/items/009/hood_of_defiance.jpg',
  },
  {
    name: 'Soul booster',
    include: ['Ring of Regen', 'Vitality Booster', 'Energy Booster'],
    img: 'http://dota2-i.ru/img/items/009/hood_of_defiance.jpg',
  },
  {
    name: 'Blad Mail',
    include: ['Point Booster', 'Chainmail', 'Robe of the Magi'],
    img: 'http://dota2-i.ru/img/items/009/blade_mail.jpg',
  },
  {
    name: 'Maelstorm',
    include: ['Gloves of Haste', 'Mithril Hammer'],
    img: 'http://dota2-i.ru/img/items/010/maelstrom.jpg',
  },
  {
    name: 'Desolator',
    include: ['Mithril Hammer', 'Mithril Hammer'],
    img: 'http://dota2-i.ru/img/items/010/desolator.jpg',
  },
  {
    name: 'BKB',
    include: ['Mithril Hammer', 'Ogre Club'],
    img: 'http://dota2-i.ru/img/items/009/black_king_bar.jpg',
  },
  {
    name: 'Sange',
    include: ['Belt of Strength', 'Ogre Club'],
    img: 'http://dota2-i.ru/img/items/010/sange.jpg',
  },
  {
    name: 'Perseverance',
    include: ['Void Stone', 'Ring of Health'],
    img: 'http://dota2-i.ru/img/items/005/perseverance.jpg',
  },
];

export const secretShopMainItems: Array<MainItem> = [];
export const secretShopImproveItem: Array<ImprovesItem> = [];
