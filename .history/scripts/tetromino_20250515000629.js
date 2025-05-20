
class Position{
    constructor(row, column){
        this.row = row;
        this.column = column;
    }
}

class Tetromino {
    constructor(canvas, cellSize, shape, initPosition, id, color) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.cellSize = cellSize;
        this.shape = shape;
        this.rotation = 0;
        this.initPosition = initPosition;
        
        this.id = id;
        this.color = color;
    }
}