
class Tetromino {
    constructor(canvas, cellSize, shape, initPosition, id, color) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.cellSize = cellSize;
        this.shape = shape;
        this.initPosition = initPosition;
        this.id = id;
        this.color = color;
    }
}