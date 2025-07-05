import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameState} from '../../services/game-state';
import {Router} from '@angular/router';
import {Difficulty} from '../../models/game.model';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, MatButton],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss'] // Corrected from styleUrl to styleUrls
})
export class Menu {

  constructor(private gameState: GameState, private router: Router) {
  }

  setDifficulty(level: string): void {
    let difficulty: Difficulty;
    switch (level) {
      case 'easy':
        difficulty = Difficulty.Easy;
        break;
      case 'normal':
        difficulty = Difficulty.Normal;
        break;
      case 'hard':
        difficulty = Difficulty.Hard;
        break;
      default:
        difficulty = Difficulty.Normal;
    }
    this.gameState.setDifficulty(difficulty);
    // Optional: Navigate to game screen
    // this.router.navigate(['/game']);
  }
}
