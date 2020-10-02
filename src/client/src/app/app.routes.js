import { homePageComponent } from './pages/home-page.component';
import { tabsPageComponent } from './pages/tabs-page-component';
import { notFound } from './common/not-found.component';
import { addNewUserPageComponent } from './pages/add-new-user-component';

export const appRoutes = [
  { path: '', component: homePageComponent },
  { path: 'tabs', component: tabsPageComponent },
  { path: 'add', component: addNewUserPageComponent },
  { path: '**', component: notFound },
];
