// variables
const gameArea = document.getElementById('game-container');
const divs = document.querySelectorAll('.game-container div')
const grid = Array.from(document.querySelectorAll('.game-container div')); 
const startBtn = document.getElementById('start');

// grid dimensions
const rows = 20; 
const columns = 10; 
createGrid();

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

const tetromino = {
  currentX: 3,
  currentY: 10,
}

// tetrominos array 
const tetrominos = [tBlock, lBlock, jBlock, oBlock, sBlock, zBlock, iBlock];

let currentTetromino = createRandomTetromino();

// creates random tetromino
function createRandomTetromino() {
  let random = Math.floor(Math.random() * tetrominos.length); 
  let randomRotation = Math.floor(Math.random() * 4); 
  return tetrominos[random][randomRotation];
}

let rotation = 0;

// colors the tetromino 
function draw() {
  let i = 0;
  while(i < 4) {
    switch (currentTetromino) {
      case tBlock[i]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('t-block')});
        break; 
      case lBlock[i]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('l-block')});
        break; 
      case jBlock[i]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('j-block')});
        break; 
      case oBlock[i]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('o-block')});
        break; 
      case sBlock[i]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('s-block')});
        break; 
      case zBlock[i]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('z-block')});
        break; 
      case iBlock[i]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('i-block')});
        break; 
    }
    i++; 
  }
}

startBtn.addEventListener('click', () => {
  erase(); 
  createRandomTetromino();
  console.log(createRandomTetromino());
  draw();
});

// erase the tetromino
function erase() {
  for (i = 0; i < grid.length; i++) {
    grid[i].classList.remove('t-block', 'l-block', 'j-block', 'o-block', 's-block', 'z-block', 'i-block');
  }
}

/*
// tetromino controls 
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
  } else if (e.key === 'ArrowDown') {
  } else if (e.key === 'ArrowRight') {
  } else if (e.key === 'ArrowLeft') {
  }
});

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
