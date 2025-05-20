import { BoardTetris } from "/scripts/boardTetris.js";

const canvasTetris = document.getElementById("canvas-tetris");
const rows = 20;
const cols = 10;
const cellSize = 26;
const space = 2;

const boardTetris = new BoardTetris(canvasTetris, rows, 10, 26, 2);

function update() {

    boardTetris.draw();

    requestAnimationFrame(update);
}

update();