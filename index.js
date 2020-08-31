let tilesContainer = document.querySelector(".tiles-container");
let turnText = document.querySelector(".turn");
let topRow = document.querySelector(".top-row");
let middleRow = document.querySelector(".middle-row");
let bottomRow = document.querySelector(".bottom-row");
let allTiles = document.querySelectorAll(".tile");

class App {
  constructor() {
    this.turn = "X";
    this.run();
  }

  run() {
    this.changeTurnText();
  }
  changeTurnText() {
    let currentText = turnText.innerHTML;
    turnText.innerHTML = `${currentText} ${this.turn}`;
  }
}

new App();
