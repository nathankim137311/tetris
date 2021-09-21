console.log('hello everybody'); 
// variables
const gameArea = document.getElementById('game-container');
const divs = document.querySelectorAll('.game-container div')
const grid = Array.from(document.querySelectorAll('.game-container div')); 
const start = document.getElementById('start');
const rows = 20; 

start.addEventListener('click', () => {
  clearGrid(gameArea);
  startGame(); 
})

// functions 
function startGame () {
  createGrid(rows);
  randomShape(); 
  determine();
  randomRotations();
  colorTetromino(); 
}

// grid 
function createGrid (rows) {
  for (i = 0; i < 10; i++) {
  let i = 0; 
  while (i < rows) { 
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

// random shape function 
function randomShape () {
  let shape = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  determine(shape); 
  return shape;
}

// determines tetromino 
function determine (shape) { 
  if (shape === tetrominos[0]) {
   shape = tBlock; 
   return tBlock;
  } else if (shape === tetrominos[1]) {
    shape = lBlock; 
    return lBlock;
  } else if (shape === tetrominos[2]) {
    shape = jBlock; 
    return jBlock;
  } else if (shape === tetrominos[3]) {
    shape = oBlock; 
    return oBlock;
  } else if (shape === tetrominos[4]) {
    shape = sBlock; 
    return sBlock;
  } else if (shape === tetrominos[5]) {
    shape = zBlock;
    return zBlock;
  } else if (shape === tetrominos[6]) {
    shape = iBlock; 
    return iBlock;
  }
}

// random rotation for tetromino
function randomRotations () { 
  let tetromino = randomShape(determine()); 
  let count = Math.floor(Math.random() * 3);
  let rotatedTetromino = tetromino[count];
  colorTetromino(tetromino, rotatedTetromino); 
}

// colors the tetromino 
function colorTetromino (tetromino, rotatedTetromino) {
  if (tetromino === tBlock) {
    tetromino = rotatedTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('t-block');
      return tetromino; 
    }); 
  } else if (tetromino === lBlock) {
    tetromino = rotatedTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('l-block');
      return tetromino; 
    }); 
  } else if (tetromino === jBlock) {
    tetromino = rotatedTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('j-block');
      return tetromino; 
    }); 
  } else if (tetromino === oBlock) {
    tetromino = rotatedTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('o-block');
      return tetromino; 
    }); 
  } else if (tetromino === sBlock) {
    tetromino = rotatedTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('s-block');
      return tetromino; 
    }); 
  } else if (tetromino === zBlock) {
    tetromino = rotatedTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('z-block');
      return tetromino; 
    }); 
  } else if (tetromino === iBlock) {
    tetromino = rotatedTetromino.forEach(index => {
      grid[currentPosition + index].classList.add('i-block');
      return tetromino; 
    }); 
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
  let rotations = determine()[count];
  if (e.key === 'ArrowUp') {
    rotateClockwise(rotations);
  } else if (e.key === 'ArrowDown') {
    rotateCounter(); 
  } else if (e.key === 'ArrowRight') {
    // move right 
  } else if (e.key === 'ArrowLeft') {
    // move left 
  }
});

function rotateClockwise () {
  eraseTetromino();
  colorTetromino(); 
  console.log(rotations); 
  count++;
  if (count === rotations.length) {
    count = 0; 
  }
}

function rotateCounter () {
  let rotations = determine()[count];
  colorTetromino(); 
  console.log(rotations); 
  count--;
  if (count === -rotations.length) {
    count = 0; 
  }
}

// make the tetromino move down every second 
let currentPosition = 3;  
timerID = setInterval(moveDown, 90000)

function moveDown() {
  eraseTetromino(); 
  let tetromino = colorTetromino(); 
  console.log(tetromino); 
  currentPosition += 10; 
  colorTetromino(); 
}

