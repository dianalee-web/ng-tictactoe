import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  squares: any = [];
  // square;
  currentPlayer: boolean;
  winner: string;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.currentPlayer = true;
  }

  getCurrentPlayer() {
    return this.currentPlayer ? 'X' : 'O';
  }
  selectSquare(index) {
    console.log(this.squares[index]);
    if (!this.squares[index]) {
      this.squares[index] = this.getCurrentPlayer();
      this.currentPlayer = !this.currentPlayer;
    }
  }
}
