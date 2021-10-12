// variables
const gameArea = document.getElementById('game-container');
let grid = Array.from(document.querySelectorAll('.game-container div')); 
const startBtn = document.getElementById('start');

// grid dimensions
const rows = 22; 
const columns = 10; 
createGrid();
addClassTaken(); 

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

// adds class 'taken' to the last 20 divs of array
function addClassTaken() {
  let i = 200;
  while (i < grid.length) {
    grid[i].classList.add('taken'); 
    i++;
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

let tetromino = {
  currentX: 3,
  currentY: 10,
}

// tetrominos array 
const tetrominos = [tBlock, lBlock, jBlock, oBlock, sBlock, zBlock, iBlock];

// randomly select a Tetromino and its first rotation 
let random = Math.floor(Math.random() * tetrominos.length);
let currentRotation = 0;
let currentTetromino = tetrominos[random][currentRotation]

// colors the tetromino 
function draw() {
  let i = 0; 
  while (i < 4) {
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
  draw();
  const timerID = setInterval(moveDown, 500)
});

// erase the tetromino
function erase() {
  currentTetromino.forEach(square => {
    grid[tetromino.currentX + tetromino.currentY + square].classList.remove('t-block', 'l-block', 'j-block', 'o-block', 's-block', 'z-block', 'i-block');
  })
}

// tetromino controls 
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    rotateRight();
  } else if (e.key === 'ArrowDown') {
    moveDown();
  } else if (e.key === 'ArrowRight') {
    moveRight(); 
  } else if (e.key === 'ArrowLeft') {
    moveLeft();
    }
});

// move tetromino right
function moveRight() {
  erase();
  const isAtRightEdge = currentTetromino.some(index => (tetromino.currentX + index) % 10 === 10 -1);
  if(!isAtRightEdge) {
    tetromino.currentX += 1; 
  }
  if(currentTetromino.some(index => grid[tetromino.currentX + tetromino.currentY + index].classList.contains('taken'))) {
    tetromino.currentX -= 1;
  }
  draw(); 
}

// move tetrominio left 
function moveLeft() {
  erase(); 
  const isAtLeftEdge = currentTetromino.some(index => (tetromino.currentX + index) % 10 === 0);
  if(!isAtLeftEdge)
    tetromino.currentX -= 1; 
  if(currentTetromino.some(index => grid[tetromino.currentX + tetromino.currentY + index].classList.contains('taken'))) {
    tetromino.currentX -= 1;
  }
  draw();
}

// rotate tetromino clockwise
function rotateRight () {
  erase();
  currentRotation++;
  if (currentRotation > 3) {
    currentRotation = 0;
  }
  currentTetromino = tetrominos[random][currentRotation]; 
  draw();
}

// rotate tetromino counter-clockwise
//function rotateLeft () {
//  currentTetromino = currentRotation--;
//  if (currentRotation < 0) {
//    currentRotation = 3;
//  }
//  return currentRotation;  
//}

// make the tetromino move down every second 
function moveDown() {
  erase();  
  tetromino.currentY += 10; 
  draw(); 
  freeze(); 
}

//freeze function 
function freeze() {
  if(currentTetromino.some(index => grid[tetromino.currentX + tetromino.currentY + index + 10].classList.contains('taken'))) {
    console.log('freeze!');
    currentTetromino.forEach(square => grid[tetromino.currentX + tetromino.currentY + square].classList.add('taken')); 
    // start a new tetromino falling
    random = Math.floor(Math.random() * tetrominos.length)
    currentTetromino = tetrominos[random][currentRotation];
    tetromino.currentX = 3;
    tetromino.currentY = 10; 
    draw(); 
  }
}

// prevent tetromino from touching the sides 

