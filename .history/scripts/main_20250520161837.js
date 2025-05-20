import { Game } from '/scripts/game.js';

const canvasTetris = document.getElementById("canvas-tetris");
const canvasNext = document.getElementById("canvas-next");
const rows = 20;
const cols = 10;
const cellSize = 26;
const space = 2;

const game = new Game(canvasTetris, rows, cols, cellSize, space,canvasNext);

function update() {
    game.update();
    requestAnimationFrame(update);
}

update();