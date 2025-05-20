import { TetrominosBag } from 'scripts/tetrominosBag.js';

export class Game {
    constructor(canvas, rows, cols, cellSize, space) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.space = space;
        this.grid = new Grid(canvas, rows, cols, cellSize, space);
        this.tetrominosBag = new TetrominosBag(canvas, cellSize);
        this.currentTetromino = null;
        this.nextTetromino = null;
        this.score = 0;
        this.gameOverFlag = false;
    }

    start() {
        this.tetrominosBag.fillbag();
        this.currentTetromino = this.tetrominosBag.nextTetromino();
        this.nextTetromino = this.tetrominosBag.nextTetromino();
    }
}