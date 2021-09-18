console.log('hello everybody'); 

const gameContainer = document.getElementById('game-container'); 
createGrid(24, 10); 

function createGrid (rows, columns) {
  for (let i = 0; i < columns; i++) {
    let i = 0; 
    while (i < rows) {
      let cell = gameContainer.appendChild(document.createElement('div'));
      cell.className += 'cell';  
      i++; 
    }
  }
}