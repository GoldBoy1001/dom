/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/Game.js
class Game {
  constructor(srcImg, fieldSize) {
    this.srcImg = srcImg;
    this.fieldSize = fieldSize;
  }
  getRandom(max) {
    this.name = "getRandom";
    return Math.floor(Math.random() * max);
  }
  createImg() {
    const img = document.createElement("img");
    img.src = this.srcImg;
    img.className = "img_goblin";
    return img;
  }
  createSection() {
    this.name = "createSection";
    const body = document.querySelector("body");
    const board = '<section class="game_field"><div class="field_container" id="fieldGame"></div></section>';
    body.insertAdjacentHTML("afterbegin", board);
  }
  generateField() {
    const field = document.getElementById("fieldGame");
    const size = this.fieldSize ** 2;
    for (let i = 0; i < size; i += 1) {
      const cell = `<div class="cell" data-cell="${i}"></div>`;
      field.insertAdjacentHTML("beforeend", cell);
    }
  }
  insertImg(img) {
    const max = this.fieldSize ** 2;
    const i = this.getRandom(max);
    const cell = document.querySelector(`div[data-cell='${i}']`);
    cell.append(img);
  }
  start() {
    this.createSection();
    this.generateField();
    const img = this.createImg();
    setInterval(() => {
      this.insertImg(img);
    }, 1000);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const game = new Game(goblin_namespaceObject, 4);
game.start();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;