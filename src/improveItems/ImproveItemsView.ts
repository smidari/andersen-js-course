import { ImprovesItem, MainItem } from '../data/data';
import { createElement } from '../utils/createHTMLelementFunc';
import { EventEmitter } from '../utils/eventEmiter/EventEmiter';
import { ADD_NEW_ITEM, DROP_START_IMPROVE_ITEM } from '../utils/eventEmiter/events';

export class ImproveItemsView extends EventEmitter {
  divWrapper: HTMLDivElement;

  constructor() {
    super();
    this.divWrapper = document.querySelector('.wrapper') as HTMLDivElement;
  }

  handelClickOpenModal() {
    const modal = document.querySelector('.modal') as HTMLDivElement;
    modal.style.display = 'block';
  }

  handelClickCloseModal() {
    const modal = document.querySelector('.modal') as HTMLDivElement;
    modal.style.display = 'none';
  }

  handelClickAddNewItem() {
    const input = document.querySelector('.name_new_item') as HTMLInputElement;
    const select1 = document.querySelector('.select_items_1') as HTMLSelectElement;
    const select2 = document.querySelector('.select_items_2') as HTMLSelectElement;
    const select3 = document.querySelector('.select_items_3') as HTMLSelectElement;
    this.emit(ADD_NEW_ITEM, {
      name: input.value,
      mainItems: [select1.value, select2.value, select3.value],
    });
  }

  handelDraggStart({ target }: any) {
    const id = target.parentNode.getAttribute('data-id');
    this.emit(DROP_START_IMPROVE_ITEM, { id });
  }

  createItem(data: ImprovesItem) {
    const img = createElement('img', { alt: `${data.name}`, src: data.img });
    const div = createElement(
      'div',
      {
        className: 'item_improve_card',
        'data-id': data.id,
        'data-includes': data.include,
        'data-tooltip': data.name,
        draggable: true,
      },
      img
    );
    div.addEventListener('dragstart', this.handelDraggStart.bind(this));
    return div;
  }

  createBtnAddItem() {
    const buttonAddItem = createElement('button', { className: 'open_modal_btn' }, 'Add');
    buttonAddItem.addEventListener('click', this.handelClickOpenModal.bind(this));
    return buttonAddItem;
  }

  createModalAddItem(mainItems: Array<MainItem>) {
    // create a modal title
    const h2Modal = createElement('h2', {}, 'Add new item');

    //create a button for close modal
    const spanCloseModal = createElement('span', { className: 'close' }, 'X');
    spanCloseModal.addEventListener('click', this.handelClickCloseModal.bind(this));

    // create an input for new name Items
    const inputName = createElement('input', {
      className: 'name_new_item',
      placeholder: 'Enter a name for the new item',
    });

    // create 3 select-lists for choose main items
    const selectMainItems = [];
    for (let i = 1; i < 4; i++) {
      const selectMainItem = createElement('select', { className: `select_items_${i}` });
      const options: HTMLElement[] = [];
      mainItems.forEach((item, index) =>
        options.push(createElement('option', { value: item.name, 'data-id': item.id }, item.name))
      );
      options.forEach(item => selectMainItem.appendChild(item));
      selectMainItems.push(selectMainItem);
    }

    // create the button to add the new Item
    const btnAddNewItem = createElement('button', { className: 'add_new_item' }, 'Add');
    btnAddNewItem.addEventListener('click', this.handelClickAddNewItem.bind(this));

    const divMyModalContent = createElement('div', { className: 'modal_content' });
    divMyModalContent.appendChild(spanCloseModal);
    divMyModalContent.appendChild(h2Modal);
    divMyModalContent.appendChild(inputName);
    selectMainItems.forEach(el => divMyModalContent.appendChild(el));
    divMyModalContent.appendChild(btnAddNewItem);
    return createElement('div', { className: 'modal' }, divMyModalContent);
  }

  render(data: Array<ImprovesItem>, mainItems: Array<MainItem>) {
    let myNode = document.querySelector('.improves_items');
    if (myNode) {
      myNode.remove();
    }
    const h3ImprovesItem = createElement('h3', {}, 'Improves items');
    const divItemsLists = createElement('div', { className: 'improves_items_lists' });
    data.forEach(item => {
      return divItemsLists.appendChild(this.createItem(item));
    });

    const buttonAddItem = this.createBtnAddItem();
    const divMyModal = this.createModalAddItem(mainItems);

    const divImprovesItems = createElement(
      'div',
      { className: 'improves_items' },
      h3ImprovesItem,
      divItemsLists,
      buttonAddItem,
      divMyModal
    );
    return this.divWrapper.append(divImprovesItems);
  }
}
