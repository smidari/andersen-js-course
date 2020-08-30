import { EventEmitter } from './helper';

class Model extends EventEmitter {
  constructor(state = {}) {
    super();
    this.state = state;
  }
}

export default Model;

// state = { предметы: [], рецепты: []}
// получить предмет
//  получить рецепт
// добавить рецепт
// удалить рецепт
