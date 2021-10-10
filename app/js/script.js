// variables
const gameArea = document.getElementById('game-container');
let grid = Array.from(document.querySelectorAll('.game-container div')); 
const startBtn = document.getElementById('start');

// grid dimensions
const rows = 22; 
const columns = 10; 
createGrid();
addClassTaken(); 
console.log(grid);

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

// adds 20 divs with class taken to the end of array
//function createDivs() {
//  let i = 0; 
//  while (i < 20) {
//    let cell = gameArea.appendChild(document.createElement('div'));
//    let takenDivs = cell.classList.add('taken');
//    grid.push(takenDivs) 
//    i++;
//  }
//}

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

let currentBlock = createRandomTetromino();
let currentRotation = 0;
let currentTetromino = currentBlock[currentRotation]

// creates random tetromino
function createRandomTetromino() {
  let randomBlock = Math.floor(Math.random() * tetrominos.length); 
  return tetrominos[randomBlock];
}

// colors the tetromino 
function draw() {
    switch (currentTetromino) {
      case tBlock[0]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('t-block')});
        break; 
      case lBlock[0]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('l-block')});
        break; 
      case jBlock[0]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('j-block')});
        break; 
      case oBlock[0]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('o-block')});
        break; 
      case sBlock[0]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('s-block')});
        break; 
      case zBlock[0]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('z-block')});
        break; 
      case iBlock[0]:
        currentTetromino.forEach(square => {
        grid[tetromino.currentX + tetromino.currentY + square].classList.add('i-block')});
        break; 
    }
}

startBtn.addEventListener('click', () => {
  createRandomTetromino();
  draw();
  const timerID = setInterval(moveDown, 500)
});

// erase the tetromino
function erase() {
  for(let i = 0; i < grid.length; i++) {
    grid[i].classList.remove('t-block', 'l-block', 'j-block', 'o-block', 's-block', 'z-block', 'i-block');
  }
}

// tetromino controls 
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    erase();
    rotateRight();
    draw();
  } else if (e.key === 'ArrowDown') {
    erase();
    rotateLeft();
    draw(); 
  } else if (e.key === 'ArrowRight') {
    erase();
    tetromino.currentX += 1;
    draw(); 
  } else if (e.key === 'ArrowLeft') {
    erase(); 
    tetromino.currentX -= 1;
    draw();
    }
});

// rotate tetromino clockwise
function rotateRight () {
  currentTetromino = currentRotation++ % 4;
  if (currentRotation > 3) {
    currentRotation = 0;
  }
  return currentRotation;
}

// rotate tetromino counter-clockwise
function rotateLeft () {
  currentTetromino = currentRotation--;
  if (currentRotation < 0) {
    currentRotation = 3;
  }
  return currentRotation;  
}

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
    currentTetromino.forEach(square => grid[tetromino.currentX + square].classList.add('taken')); 
    // start a new tetromino falling
    let random = Math.floor(Math.random() * tetrominos.length)
    currentTetromino = tetrominos[random][currentRotation];
    tetromino.currentX = 3;
    tetromino.currentY = 10; 
    draw(); 
  }
}