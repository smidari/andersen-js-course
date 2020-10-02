import { wfm } from '../../tools/util';
import { renderComponent } from '../component/render-component';
import { router } from './router';

export class RoutingModule {
  constructor(routes) {
    this.routes = routes;
  }

  // рендерит роуты
  init() {
    window.addEventListener('hashchange', this.renderRoute.bind(this));
    this.renderRoute();
  }

  // из массива routes взять определенныый компонент по текущему route и зарендерить
  renderRoute() {
    const url = router.getUrl();
    let route = this.routes.find(r => r.path === url);
    if (wfm.isUndefined(route)) {
      route = this.routes.find(r => r.path === '**');
    }
    document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${
      route.component.selector
    }>`;
    renderComponent(route.component);
  }
}
