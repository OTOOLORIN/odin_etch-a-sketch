const noOfSqrs = 16;

const totalSqrs = 16**2;

function displayGrid(totalSqrs) {

  const grid = document.querySelector('.container');

  const gridWidth = grid.offsetWidth;
  const squareSize = gridWidth / totalSqrs;

  let noOfSquares = 0;
  while (noOfSquares < totalSqrs) {
    const square = document.createElement('div');
    square.className = 'square';
    grid.appendChild(square);
    noOfSquares++;
  }
  console.log(squareSize); 
}