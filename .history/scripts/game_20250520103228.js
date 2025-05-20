import { TetrominosBag } from "/scripts/tetrominosBag.js";
import { BoardTetris } from "/scripts/boardTetris.js";

export class Game {
    constructor(canvas, rows, cols, cellSize, space) {
        this.BoardTetris
    }

    start() {
        this.tetrominosBag.fillbag();
        this.currentTetromino = this.tetrominosBag.nextTetromino();
        this.nextTetromino = this.tetrominosBag.nextTetromino();
    }
}