import {Injectable} from '@angular/core';
import {Difficulty} from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameState {
  #difficulty: Difficulty = Difficulty.Normal;

  setDifficulty(difficulty: Difficulty): void {
    this.#difficulty = difficulty;
    console.log(`Difficulty set to: ${this.#difficulty}`); // For debugging
  }

  getDifficulty(): Difficulty {
    return this.#difficulty;
  }
}
