let tilesContainer = document.querySelector(".tiles-container");
let turnText = document.querySelector(".turn");
let topRow = document.querySelector(".top-row");
let middleRow = document.querySelector(".middle-row");
let bottomRow = document.querySelector(".bottom-row");
let allTiles = document.querySelectorAll(".tile");

class App {
  constructor() {
    this.turn = "X";
    this.state = new Array(9).fill("L");
    this.run();
  }

  run() {
    this.changeTurnText();
    this.addClicksToTiles();
  }
  changeTurnText() {
    let currentText = `Turn: ${this.turn}`;
    turnText.innerHTML = currentText;
  }
  addClicksToTiles() {
    allTiles.forEach((tile) => {
      tile.addEventListener("click", () => {
        console.log(tile.classList);
        this.updateTileText(tile);
        this.updateState(tile);
        this.checkIfGameWon();
        this.changeTurn();
        this.changeTurnText();
        console.log(this.state);
      });
    });
  }
  updateTileText(tile) {
    tile.innerHTML = "";
    let letter = document.createElement("p");
    letter.classList.add("tile-inner-symbol");
    letter.innerHTML = this.turn;
    tile.appendChild(letter);
  }
  updateState(tile) {
    let tileNumber = tile.classList[1].split("-")[1];
    this.state[`${tileNumber - 1}`] = this.turn;
  }
  checkIfGameWon() {
    let horizontalWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    let verticalWins = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    let diagonalWins = [
      [2, 4, 6],
      [0, 4, 8],
    ];
    //check for horizontal wins
    for (let i = 0; i < horizontalWins.length; i++) {
      let allSame = true;
      for (let j = 1; j < horizontalWins[i].length; j++) {
        let prevValue = horizontalWins[i][j - 1];
        let currentValue = horizontalWins[i][j];
        if (this.state[prevValue] !== this.state[currentValue]) {
          allSame = false;
        }
        if (this.state[prevValue] === "L" || this.state[currentValue] === "L") {
          allSame = false;
        }
      }
      if (allSame) {
        this.gameWon();
        return;
      }
    }
    //check for vertical wins
    for (let i = 0; i < verticalWins.length; i++) {
      let allSame = true;
      for (let j = 1; j < verticalWins[i].length; j++) {
        let prevValue = verticalWins[i][j - 1];
        let currentValue = verticalWins[i][j];
        if (this.state[prevValue] !== this.state[currentValue]) {
          allSame = false;
        }
        if (this.state[prevValue] === "L" || this.state[currentValue] === "L") {
          allSame = false;
        }
      }
      if (allSame) {
        this.gameWon();
        return;
      }
    }
    //check for diagonal wins
    for (let i = 0; i < diagonalWins.length; i++) {
      let allSame = true;
      for (let j = 1; j < diagonalWins[i].length; j++) {
        let prevValue = diagonalWins[i][j - 1];
        let currentValue = diagonalWins[i][j];
        if (this.state[prevValue] !== this.state[currentValue]) {
          allSame = false;
        }
        if (this.state[prevValue] === "L" || this.state[currentValue] === "L") {
          allSame = false;
        }
      }
      if (allSame) {
        this.gameWon();
        return;
      }
    }
  }
  gameWon() {
    console.log(`${this.turn} WINS!!!!!!!!`);
  }
  changeTurn() {
    if (this.turn === "X") {
      this.turn = "O";
    } else {
      this.turn = "X";
    }
  }
}

new App();
