class Grid {
    constructor(canvas, rows, cols, cel) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.rows = rows;
        this.cols = cols;
        this.cellWidth = canvas.width / cols;
        this.cellHeight = canvas.height / rows;

    }
}