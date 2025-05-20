import { TetrominosBag } from "/scripts/tetrominosBag.js";
import { BoardTetris } from "/scripts/boardTetris.js";

export class Game {
    constructor(canvas, rows, cols, cellSize, space) {
        this.boardTetris = new BoardTetris(canvas, rows, cols, cellSize, space);
        this.tetrominosBag = new TetrominosBag(canvas, cellSize);
        this.currentTetromino = this.tetrominosBag.nextTetromino();
    }

    start() {
        this.tetrominosBag.fillbag();
        this.currentTetromino = this.tetrominosBag.nextTetromino();
        this.nextTetromino = this.tetrominosBag.nextTetromino();
    }
}