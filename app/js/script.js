console.log('hello everybody'); 
// variables
const gameArea = document.getElementById('game-container');
const grid = Array.from(document.querySelectorAll('.game-container div')); 
const start = document.getElementById('start');
const rows = 20; 

createGrid(rows);
console.log(grid);

start.addEventListener('click', () => {
  let gridDimensions = prompt('How many rows do you want?');
  let rows = parseInt(gridDimensions);
  startGame(rows); 
})

// functions 
function startGame () {
  createGrid(rows);
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

// Tetromino blocks
const tBlock = [
  [11, 12, 2, 13],
  [2, 11, 12, 13],
  [11, 12, 13, 22],
  [11, 2, 12, 22]
]; 

const tetrominos = [tBlock]

let currentPosition = 3; 
let current = tetrominos[0][0];  

console.log(current);

//draw the first rotation in the first tetromino

function draw() {
  current.forEach(index => {
    grid[currentPosition + index].classList.add('tetromino');
  });
}

draw();