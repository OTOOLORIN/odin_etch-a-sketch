const noOfSqrs = 16;

const totalSqrs = 16**2;

function displayGrid(totalSqrs) {

  const grid = document.querySelector('.container');

  const gridWidth = grid.offsetWidth;
  const squareSize = gridWidth / totalSqrs**0.5;

  let noOfSquares = 0;
  while (noOfSquares < totalSqrs) {
    const square = document.createElement('div');
    square.className = 'square';
    square.style.setProperty('--square-width', `${squareSize}px`);
    square.style.setProperty('--square-height', `${squareSize}px`)
    grid.appendChild(square);
    noOfSquares++;
  }
  console.log(squareSize);
}