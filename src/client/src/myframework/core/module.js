import { initComponents } from './component/init-components';
// eslint-disable-next-line import/no-cycle
import { initRouting } from './routing/init-routing';

export class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComponent = config.bootstrap; // компонент который нужно зарендерить в первую очередь
    this.routes = config.routes;
  }

  // запускает весь модуль
  start() {
    initComponents(this.bootstrapComponent, this.components);
    initRouting(this.routes);
  }
}
