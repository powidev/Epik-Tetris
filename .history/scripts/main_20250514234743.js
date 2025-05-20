import { BoardTetris } from "./board.js";

const cavasTetris = document.getElementById("canvas-tetris");

const boardTetris = new BoardTetris(canvasTetris, 20, cols, cellSize, space);