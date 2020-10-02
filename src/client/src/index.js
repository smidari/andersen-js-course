import { bootstrap, wfm } from './myframework';
import { appModule } from './app/app.module';

wfm.delay(1000).then(() => {
  bootstrap(appModule);
});
