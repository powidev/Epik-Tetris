import { BoardTetris } from "./board.js";

const canvasTetris = document.getElementById("canvas-tetris");
const rows = 20;
const cols = 10;
const cellSize = 26;
const space = 2;

const boardTetris = new BoardTetris(canvasTetris, 20, 10, 26, 2);

function update() {
    boardTetris.ctx.clearRect(0, 0, canvasTetris.width, canvasTetris.height);
    boardTetris.draw();
}