import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Menu} from './views/menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Hoppelchens-Labyrinth';
}
