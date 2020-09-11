import { v1 } from 'uuid';

export class ItemImprove {
  id: string;
  name: string;
  img: string;
  include: Array<string>;

  constructor(
    name: string,
    include: Array<string>,
    image = 'http://dota2-i.ru/img/items/001/town_portal_scroll.jpg',
    id = v1()
  ) {
    this.id = id;
    this.name = name;
    this.img = image;
    this.include = include;
  }
}
