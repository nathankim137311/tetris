console.log('hello everybody'); 
// variables
const gameArea = document.getElementById('game-container');
const divs = document.querySelectorAll('.game-container div')


const grid = Array.from(document.querySelectorAll('.game-container div')); 
const start = document.getElementById('start');
const rows = 20; 

start.addEventListener('click', () => {
  let gridDimensions = prompt('How many rows do you want?', 20);
  let rows = parseInt(gridDimensions);
  clearGrid(gameArea);
  startGame(rows); 
})

// functions 
function startGame () {
  createGrid(rows);
  randomShape(); 
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
  [2, 3, 11, 12],
  [2, 12, 13, 23]
];

const zBlock = [
  [1, 2, 12, 13],
  [3, 12, 13, 22],
  [1, 2, 12, 13],
  [3, 12, 13, 22]
];

const iBlock = [
  [11, 12, 13, 14],
  [3, 13, 23, 33],
  [11, 12, 13, 14],
  [3, 13, 23, 33]
];

const tetrominos = [tBlock, lBlock, jBlock, oBlock, sBlock, zBlock, iBlock]

let currentPosition = 3;  

// random shape function 
function randomShape () {
  shape = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  draw(shape); 
  return shape;
}

// adds classlist and adds color to random tetromino
function draw() {
  if (shape === tetrominos[0]) {
   shape = tBlock; 
   shape[Math.floor(Math.random() * 3)].forEach(index => {
      grid[currentPosition + index].classList.add('t-block');
      });
      return shape;
  } else if (shape === tetrominos[1]) {
    shape = lBlock; 
    shape[Math.floor(Math.random() * 3)].forEach(index => {
      grid[currentPosition + index].classList.add('l-block');
      });
      return shape;
  } else if (shape === tetrominos[2]) {
    shape = jBlock; 
    shape[Math.floor(Math.random() * 3)].forEach(index => {
      grid[currentPosition + index].classList.add('j-block');
      });
      return shape;
  } else if (shape === tetrominos[3]) {
    shape = oBlock; 
    shape[Math.floor(Math.random() * 3)].forEach(index => {
      grid[currentPosition + index].classList.add('o-block');
      });
      return shape;
  } else if (shape === tetrominos[4]) {
    shape = sBlock; 
    shape[Math.floor(Math.random() * 3)].forEach(index => {
      grid[currentPosition + index].classList.add('s-block');
      });
      return shape;
  } else if (shape === tetrominos[5]) {
    shape = zBlock;
    shape[Math.floor(Math.random() * 3)].forEach(index => {
      grid[currentPosition + index].classList.add('z-block');
      }); 
      return shape;
  } else if (shape === tetrominos[6]) {
    shape = iBlock; 
    shape[Math.floor(Math.random() * 3)].forEach(index => {
      grid[currentPosition + index].classList.add('i-block');
      });
      return shape;
  }
}

// keys rotate tetromino 
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    let rotations = draw()[count];
    count++
    if (count === rotations.length) {
      count = 0; 
    }
  } else if (e.key === 'ArrowDown') {
    draw()[0 - 1];
  }
});



//function cycleRotations (x) {
//  let = rotations = draw()[count];
//  console.log(rotations); 
//  count++;
//  if (count === rotations.length) {
//    count = 0; 
//  }
//}

//function nextRotation () {
//  rotations[index]; 
//  index = (index + 1) % (rotations.length); 
//}
