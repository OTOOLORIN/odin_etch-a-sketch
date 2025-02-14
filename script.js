const noOfSqrs = 100;

const totalSqrs = noOfSqrs**2;

function displayGrid(totalSqrs) {

  const grid = document.querySelector('.container');

  const gridWidth = grid.offsetWidth;
  const squareSize = gridWidth / totalSqrs**0.5;

  const square = document.createElement('div');
  square.className = 'square';
  square.style.setProperty('--square-width', `${squareSize}px`);
  square.style.setProperty('--square-height', `${squareSize}px`);

  let noOfSquares = 0;
  while (noOfSquares < totalSqrs) {

    const sqrCopy = square.cloneNode(true);
    grid.appendChild(sqrCopy);
    noOfSquares++;
  }
  console.log(squareSize);
}