class Grid {
    constructor(canvas, rows, cols, cellSize) {
        this.canvas = canvas;
        this.rows = rows;
        this.cols = cols;
        this.cell = canvas.width / cols;
        this.cellHeight = canvas.height / rows;

    }
}