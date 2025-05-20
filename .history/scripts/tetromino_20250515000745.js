
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
        this.position = new Position(this.initPosition.row, this.initPosition.column);
        this.id = id;
        this.color = color;
    }

    drawSquare(x, y, side, color, borderColor) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, side, side);

        this.ctx.strokeStyle = borderColor;
        this.ctx.lineWidth = bordeSize;
        this.ctx.strokeRect(x+bordeSize/2, y+bordeSize/2, side-bordeSize, side-bordeSize);	
    }
}