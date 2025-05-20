
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
                square : "#FE86"
            },
            3:{
                rightTriangle : "#B5193B",
                leftTriangle : "#FFFFFF",
                square : "#1B2EE1"
            },
            4:{
                rightTriangle : "#B5193B",
                leftTriangle : "#FFFFFF",
                square : "EE1BE1"
            },
            }
        }
    }
}