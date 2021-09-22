console.log('hello everybody'); 
// variables
const gameArea = document.getElementById('game-container');
const divs = document.querySelectorAll('.game-container div')
const grid = Array.from(document.querySelectorAll('.game-container div')); 
const start = document.getElementById('start');


start.addEventListener('click', () => {
  startGame(); 
})

// functions 
function startGame () {
  clearGrid(gameArea);
  createGrid();
  eraseTetromino(); 
  generateTetromino(); 
}

// grid 
function createGrid () {
  for (i = 0; i < 10; i++) {
  let i = 0; 
  while (i < 20) { 
    let cell = gameArea.appendChild(document.createElement('div'));
    grid.push(cell); 
    i++; 
  }
 }
}

const clearGrid = (parent) => {
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild); 
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

const tetrominos = [tBlock, lBlock, jBlock, oBlock, sBlock, zBlock, iBlock];

let currentPosition = 0; 
let currentRotation = 0; 

// generate random shape
let random = Math.floor(Math.random() * tetrominos.length); 
let tetromino = tetrominos[random];
let rotateTetromino = tetromino[currentRotation];

// colors the tetromino 
function colorTetromino (tetromino, rotateTetromino) {
  if (tetromino === tBlock) {
    rotateTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('t-block');
    }); 
  } else if (tetromino === lBlock) {
    rotateTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('l-block');
    }); 
  } else if (tetromino === jBlock) {
    rotateTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('j-block');
    }); 
  } else if (tetromino === oBlock) {
    rotateTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('o-block');
    }); 
  } else if (tetromino === sBlock) {
    rotateTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('s-block');
    }); 
  } else if (tetromino === zBlock) {
    rotateTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('z-block');
    }); 
  } else if (tetromino === iBlock) {
    rotateTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('i-block');
    }); 
  } 
}

// tetromino with color
function generateTetromino () {
  colorTetromino(tetromino, rotateTetromino); 
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
    eraseTetromino(); 
    rotateRight(); 
  } else if (e.key === 'ArrowDown') {
    eraseTetromino(); 
    rotateLeft(); 
  } else if (e.key === 'ArrowRight') {
    eraseTetromino(); 
    moveRight(); 
  } else if (e.key === 'ArrowLeft') {
    eraseTetromino();
    moveLeft(); 
  }
});

function rotateRight () {
  let newRotation = tetromino[currentRotation++ % tetromino.length];
  colorTetromino(tetromino, newRotation);  
  if (currentRotation > 3) {
    currentRotation = 0;
  }
  console.log(newRotation);
}

function rotateLeft () {
  let newRotation = tetromino[currentRotation--];
  colorTetromino(tetromino, newRotation); 
  if (currentRotation < 0) {
    currentRotation = 3;
  }
  console.log(newRotation); 
}

function moveRight () {
  console.log(currentPosition++);
  colorTetromino(tetromino, rotateTetromino); 
}

function moveLeft () {
  console.log(currentPosition--); 
  colorTetromino(tetromino, rotateTetromino); 
}

// make the tetromino move down every second 
// timerID = setInterval(moveDown, 5000)

function moveDown() {
  eraseTetromino();  
  currentPosition =+ 10; 
  colorTetromino(tetromino, rotateTetromino); 
  console.log(currentPosition); 
}