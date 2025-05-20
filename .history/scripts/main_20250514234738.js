import { BoardTetris } from "./board.js";

const cavasTetris = document.getElementById("canvas-tetris");

const boardTetris = new BoardTetris(canvasTetris, rows, cols, cellSize, space);