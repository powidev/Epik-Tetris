import { Grid } from '/scripts/grid.js';

export class BoardTetris extends Grid {
    constructor(canvas, rows, cols, cellSize, space) {
        super(canvas, rows, cols, cellSize, space);
    }

    isInside(row, col){
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }
    isEmpty(row, col){
        return this.isInside(row, col) && this.matriz[row][col] === 0;
    }
    isRowFull(row){
        return this.matriz[row].every(element => element !== 0);
    }
    isRowEmpty(row){
        return this.matriz[row].every(element => element === 0);
    }
    clearRow(row){
        this.matriz[row].fill(0);
    }
    moveRowDown(row, numRows){
        this.matriz[row + numRows] = this.matriz[row].slice();
        this.clearRow(row);
    }
    clearFullRows(){
        let cont = 0;

        for(let row  = this.rows - 1; row >= 0; row--){
            if(this.isRowFull(row)){
                this.clearRow(row);
                cont++;
            }
            else if(cont > 0){
                this.moveRowDown(row, cont);
            }
        }
        return cont;
    }
    gameOver(){
        return !(this.isRowEmpty(0));
    }
}

export class boardNext extends Grid {
    constructor(canvas, rows, cols, cellSize, space, listTretominos) {
        super(canvas, rows, cols, cellSize, space);
        this.listTretominos = listTretominos;
    }
    updateMatriz(){
        this.restartMatriz();
        let cont = 0;
        for(let i = 0; i < this.listTretominos.length; i++){
            const shape = this.listTretominos[i].currentShape();
            for(let j = 0; j < shape.length; j++){
                this.matriz[shape[j].row + cont][shape[j].column] = this.listTretominos[i].id;
            }
            cont++;
        }
    }
}