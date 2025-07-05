import {Routes} from '@angular/router';
import {Menu} from './views/menu/menu';

export const routes: Routes = [
  {path: 'menu', component: Menu},
  {path: '', redirectTo: '/menu', pathMatch: 'full'},
  // { path: 'game', component: GameComponent }, // Placeholder for game component route
  {path: '**', redirectTo: '/menu'} // Wildcard route
];
