import { WFMModule } from '../myframework';
import { appComponent } from './app.component';
import { appHeader } from './common/app.header';
import { appRoutes } from './app.routes';

class AppModule extends WFMModule {
  constructor(config) {
    super(config);
  }
}

export const appModule = new AppModule({
  components: [appHeader],
  bootstrap: appComponent, // принимает корневой компнент
  routes: appRoutes,
});
