import { WMFComponent } from '../myframework';

// Корневой компонент который отвечает за шаблон всего приложения
class AppComponent extends WMFComponent {
  constructor(config) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  
  <router-outlet></router-outlet>
  `,
});
