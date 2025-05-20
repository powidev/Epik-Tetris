

const canvasTetris = document.getElementById("canvas-tetris");
const rows = 20;
const cols = 10;
const cellSize = 26;
const space = 2;


function update() {

    boardTetris.draw();
    tetromino.draw(boardTetris);
    requestAnimationFrame(update);
}

update();