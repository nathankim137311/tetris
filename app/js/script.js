// variables
const gameArea = document.getElementById('game-container');
const divs = document.querySelectorAll('.game-container div')
const grid = Array.from(document.querySelectorAll('.game-container div')); 
const startBtn = document.getElementById('start');

// grid dimensions
const rows = 20; 
const columns = 10; 
createGrid();
createDivs(); 

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

// adds 20 divs with class taken to the end of array
function createDivs() {
  let i = 0; 
  while (i < 20) {
    let cell = gameArea.appendChild(document.createElement('div'));
    let takenDivs = cell.classList.add('taken');
    grid.push(takenDivs) 
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

const randomTetromino = createRandomTetromino();
let currentBlock = randomTetromino[0];
let currentRotation = randomTetromino[2];
let currentTetromino = currentBlock[currentRotation]

// creates random tetromino
function createRandomTetromino() {
  let randomBlock = Math.floor(Math.random() * tetrominos.length); 
  let currentRotation = Math.floor(Math.random() * 4); 
  return [tetrominos[randomBlock], tetrominos[randomBlock][currentRotation], currentRotation];
}

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
  draw();
  const timerID = setInterval(moveDown, 1000)
});

// erase the tetromino
function erase() {
  for (let i = 0; i < grid.length; i++) {
    grid[i].classList.remove('t-block', 'l-block', 'j-block', 'o-block', 's-block', 'z-block', 'i-block');
  }
}

// tetromino controls 
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    console.log('ass')
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
  currentTetromino = currentBlock[currentRotation++ % 4];
  if (currentRotation > 3) {
    currentRotation = 0;
  }
  return currentRotation;
}

// rotate tetromino counter-clockwise
function rotateLeft () {
  currentTetromino = currentBlock[currentRotation--];
  if (currentRotation < 0) {
    currentRotation = 3;
  }
  return currentRotation;  
}

// make the tetromino move down every second 
function moveDown() {
  erase();  
  tetromino.currentY += 10; 
  if (tetromino.currentY >= 179) {
    currentTetromino.forEach(index => grid[tetromino.currentX + index].classList.add('taken')); 
    clearInterval(timerID);  
  }
  draw(); 
  freeze(); 
}

//freeze function 
function freeze() {
  if(currentTetromino.some(index => grid[tetromino.currentX + index + 10].classList.contains('taken'))) {
    currentTetromino.forEach(index => grid[tetromino.currentX + index].classList.add('taken')); 
    // start a new tetromino falling
    // random = Math.floor(Math.random() * theTetrominoes.length)
    // current = theTetrominoes[random][currentRotation];
    // currentPosition = 4
    // draw(); 
  }
}