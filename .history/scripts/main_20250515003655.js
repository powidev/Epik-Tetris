import { BoardTetris } from "/scripts/boardTetris.js";
import { Tetromino, TetraminoTypes } from "/scripts/tetromino.js";

const canvasTetris = document.getElementById("canvas-tetris");
const rows = 20;
const cols = 10;
const cellSize = 26;
const space = 2;

const boardTetris = new BoardTetris(canvasTetris, rows, cols, cellSize, space);
const tetrominoType = TetraminoTypes.O;
const tetromino = new Tetromino(canvasTetris, cellSize, tetrominoType.shapes, tetrominoType.initPosition, tetrominoType.id);

function update() {

    boardTetris.draw();
    tetromino.draw(boardTetris);
    requestAnimationFrame(update);
}

update();