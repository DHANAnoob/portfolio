import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'thank-you',
    component: ThankYouComponent,
  },
];
