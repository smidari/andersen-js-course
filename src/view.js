import { createElement, EventEmitter } from './helper';

class View extends EventEmitter {
  constructor() {
    super();
    this.divMainitems = document.querySelector('.main_items_lists');
    this.divImprovesItems = document.querySelector('.improves_items_lists');
  }

  // eslint-disable-next-line class-methods-use-this
  createListMainItems(items) {
    const img = createElement('img', { alt: `${items.name}`, src: items.img });
    return createElement('div', { className: 'main_items_list' }, img);
  }

  // eslint-disable-next-line class-methods-use-this
  createListImprovesItems(items) {
    const img = createElement('img', { alt: `${items.name}`, src: items.img });
    return createElement('div', { className: 'improves_items_list' }, img);
  }

  show(state) {
    state.mainItems.forEach(item => {
      this.divMainitems.appendChild(this.createListMainItems(item));
    });
    state.improvesItems.forEach(item => {
      this.divImprovesItems.appendChild(this.createListImprovesItems(item));
    });
  }
}

export default View;
