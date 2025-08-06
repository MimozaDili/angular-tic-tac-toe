import { Component, OnInit } from '@angular/core';
import { GameSettingsService } from '../services/game-settings.service';
import { KebabCasePipe } from '../services/kebab-case.pipe';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  standalone: true,
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
  imports: [CommonModule, NgOptimizedImage, KebabCasePipe, FormsModule, SettingsComponent],
})
export class TicTacToeComponent implements OnInit {
  squares: string[] = Array(9).fill(null);
  xIsNext: boolean = true;
  winner: string | null = null;
  history: string[] = [];
  playerXName: string = '';
  playerOName: string = '';
  markerX: string = 'X';
  markerO: string = 'O';

  constructor(public settings: GameSettingsService) {}

  onSettingsChange(settings: { playerXName: string; playerOName: string; markerX: string; markerO: string }) {
    //this.settings.setSettings(settings);
    this.playerXName = this.settings.playerXName;
    this.playerOName = this.settings.playerOName;
    this.markerX = this.settings.markerX;
    this.markerO = this.settings.markerO;
  }

  ngOnInit(): void {
    this.loadHistory();
  }

  get player() {
    return this.xIsNext ? this.settings.markerX : this.settings.markerO;
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares[idx] = this.player;
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();

      if (this.winner) {
        this.updateHistory(this.winner + ' wins!');
      } else if (this.isDraw()) {
        this.updateHistory('It\'s a Draw!');
      }
    }
  }

  isDraw(): boolean {
    return !this.winner && this.squares.every(square => square !== null);
  }

  updateHistory(outcome: string): void {
    this.history.push(outcome);
    this.saveHistory();
  }

  calculateWinner(): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }

  restartGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  private saveHistory(): void {
    localStorage.setItem('ticTacToeHistory', JSON.stringify(this.history));
  }

  private loadHistory(): void {
    const storedHistory = localStorage.getItem('ticTacToeHistory');
    if (storedHistory) {
      this.history = JSON.parse(storedHistory);
    }
  }
}
