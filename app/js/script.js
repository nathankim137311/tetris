// variables
const gameArea = document.getElementById('game-container');
const divs = document.querySelectorAll('.game-container div')
const grid = Array.from(document.querySelectorAll('.game-container div')); 
const startBtn = document.getElementById('start');

// grid dimensions
const rows = 20; 
const columns = 10; 

startBtn.addEventListener('click', () => {
  createGrid();
  createRandomTetromino();
  draw();
});

// grid 
function createGrid () {
  for (i = 0; i < columns; i++) {
  let i = 0; 
  while (i < rows) { 
    let cell = gameArea.appendChild(document.createElement('div'));
    grid.push(cell); 
    i++; 
  }
 }
}

// Tetromino blocks
const tBlock = [
  [11, 12, 2, 13],
  [2, 12, 22, 13],
  [11, 12, 13, 22],
  [11, 2, 12, 22]
]; 

const lBlock = [
  [3, 11, 12, 13],
  [2, 12, 22, 23],
  [11, 12, 13, 21],
  [1, 2, 12, 22]
];

const jBlock = [
  [1, 11, 12, 13],
  [2, 3, 12, 22],
  [11, 12, 13, 23],
  [2, 12, 21, 22]
];

const oBlock = [
  [2, 3, 12, 13],
  [2, 3, 12, 13],
  [2, 3, 12, 13],
  [2, 3, 12, 13]
];

const sBlock = [
  [2, 3, 11, 12],
  [2, 12, 13, 23],
  [12, 13, 21, 22],
  [1, 11, 12, 22]
];

const zBlock = [
  [1, 2, 12, 13],
  [3, 12, 13, 22],
  [11, 12, 22, 23],
  [2, 11, 12, 21]
];

const iBlock = [
  [11, 12, 13, 14],
  [3, 13, 23, 33],
  [21, 22, 23, 24],
  [2, 12, 22, 32]
];

// tetrominos array 
const tetrominos = [tBlock, lBlock, jBlock, oBlock, sBlock, zBlock, iBlock];

let currentPosition = 0; 
let currentTetromino = createRandomTetromino(); 

// creates random tetromino
function createRandomTetromino() {
  let random = Math.floor(Math.random() * tetrominos.length); 
  return tetrominos[random][random]
}

// colors the tetromino 
function draw() {
  switch(currentTetromino) {
    case tBlock.forEach(rotation => rotation):
      currentTetromino.forEach(square => {
        grid[currentPosition + square].classList.add('t-block')});
      break; 
    case lBlock.forEach(rotation => rotation):
      currentTetromino.forEach(square => {
        grid[currentPosition + square].classList.add('l-block')});
      break;
    case jBlock.forEach(rotation => rotation):
      currentTetromino.forEach(square => {
        grid[currentPosition + square].classList.add('j-block')});
      break; 
    case oBlock.forEach(rotation => rotation):
      currentTetromino.forEach(square => {
        grid[currentPosition + square].classList.add('o-block')});
      break; 
    case sBlock.forEach(rotation => rotation):
      currentTetromino.forEach(square => {
        grid[currentPosition + square].classList.add('s-block')});
      break; 
    case zBlock.forEach(rotation => rotation):
      currentTetromino.forEach(square => {
        grid[currentPosition + square].classList.add('z-block')});
      break;  
    case iBlock.forEach(rotation => rotation):
      currentTetromino.forEach(square => {
        grid[currentPosition + square].classList.add('i-block')});
      break; 
  }
}

// erase the tetromino
function eraseTetromino () {
  for (i = 0; i < grid.length; i++) {
    grid[i].classList.remove('t-block', 'l-block', 'j-block', 'o-block', 's-block', 'z-block', 'i-block');
  }
}

// tetromino controls 
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
  } else if (e.key === 'ArrowDown') {
  } else if (e.key === 'ArrowRight') {
  } else if (e.key === 'ArrowLeft') {
  }
});

/*
// rotate tetromino clockwise
function rotateRight () {
  tetromino[currentRotation++ % tetromino.length];
  if (currentRotation > 3) {
    currentRotation = 0;
  }
  console.log(currentRotation);
  return currentRotation;
}

// rotate tetromino counter-clockwise
function rotateLeft () {
  tetromino[currentRotation--];
  if (currentRotation < 0) {
    currentRotation = 3;
  }
  console.log(currentRotation);
  return currentRotation;  
}

// move tetromino to the right 
function moveRight () {
  console.log(currentPosition++);
}

// move tetromino to the left 
function moveLeft () {
  console.log(currentPosition--); 
}

// make the tetromino move down every second 
const timerID = setInterval(moveDown, 1000)

function moveDown() {
  eraseTetromino();  
  console.log(currentPosition += 10); 
  if (currentPosition >= 179) {
    clearInterval(timerID);  
  }
  colorTetromino(tetromino, rotateTetromino); 
}
*/
