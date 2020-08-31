let tilesContainer = document.querySelector(".tiles-container");
let turnText = document.querySelector(".turn");
let topRow = document.querySelector(".top-row");
let middleRow = document.querySelector(".middle-row");
let bottomRow = document.querySelector(".bottom-row");
let allTiles = document.querySelectorAll(".tile");

class App {
  constructor() {
    this.turn = "X";
    this.state = new Array(9).fill("");
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
  changeTurn() {
    if (this.turn === "X") {
      this.turn = "O";
    } else {
      this.turn = "X";
    }
  }
}

new App();
