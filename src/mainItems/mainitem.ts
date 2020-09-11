import { v1 } from 'uuid';

export class ItemMain {
  id: string;
  name: string;
  img: string;

  constructor(name: string, image: string, id = v1()) {
    this.id = id;
    this.name = name;
    this.img = image;
  }
}
