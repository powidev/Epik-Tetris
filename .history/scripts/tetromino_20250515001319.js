
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

    drawSquare(x, y, side, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, side, side);
    }

    drawTriangle(x1, y1, x2, y2, x3, y3, color) {
        this.ctx.beginPath();     
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.lineTo(x3, y3);
        this.ctx.closePath();
        this.ctx.fillStyle = color;  
        this.ctx.fill();
    }

    getColorPalette(id) {
        const palette = {
            1:{
                rightTriangle : "#B5193B",
                leftTriangle : "#FFFFFF",
                square : "EE1B2E"
            },
            2:{
                rightTriangle : "#FE5E02",
                leftTriangle : "#FFFFFF",
                square : "#FE8602"
            },
            3:{
                rightTriangle : "#FE8601",
                leftTriangle : "#FFFFFF",
                square : "#FFDB01"
            },
            4:{
                rightTriangle : "#22974C",
                leftTriangle : "#FFFFFF",
                square : "#24DC4F"
            },
            5:{
                rightTriangle : "#49BDFF",
                leftTriangle : "#FFFFFF",
                square : "#2D97F7"
            },
            6:{
                rightTriangle : "#0000C9",
                leftTriangle : "#FFFFFF",
                square : "#0101F0"
            },
            7:{
                rightTriangle : "#85",
                leftTriangle : "#FFFFFF",
                square : "#00C6C7"
            }
        }
    }
}