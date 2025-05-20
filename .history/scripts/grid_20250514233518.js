class Grid {
    constructor(canvas, rows, cols, cellSize) {
        this.canvas = canvas;
        this.rows = rows;
        this.cols = cols;
        this.cellWidth = canvas.width / cols;
        this.cellHeight = canvas.height / rows;

    }
}