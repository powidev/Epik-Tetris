const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const KEY = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
    A: 65,
    D: 68,
};

let gameOver = false;
let score = 0;
let level = 1;
let blockSize = 20;
let blockSpeed = 10;
let blockRow = 0;
let blockCol = 0;
let blockRowMax = 5;
let blockColMax = 10;
let blockRowMin = 0;
let blockColMin = 0;

let blockRowSpeed = 0;
let blockColSpeed = 0;

let blockRowAccel = 0;
let blockColAccel = 0;

let blockRowMaxSpeed = 0;
let blockColMaxSpeed = 0;