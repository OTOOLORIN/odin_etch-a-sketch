const noOfSqrs = 40;
const grid = document.querySelector('.container');

function displayGrid(noOfSqrs) {

  const totalSqrs = noOfSqrs**2;

  const gridWidth = grid.offsetWidth;
  const squareSize = gridWidth / noOfSqrs;

  const square = document.createElement('div');
  square.className = 'square';
  const style = document.createElement('style');
  style.innerHTML = `.square {width: ${squareSize}px; height: ${squareSize}px;}`;
  document.head.appendChild(style);

  let noOfSquares = 0;
  while (noOfSquares < totalSqrs) {

    const sqrCopy = square.cloneNode(true);
    grid.appendChild(sqrCopy);
    noOfSquares++;
  }
  console.log(document.querySelectorAll('.container > div').length);
}

displayGrid(noOfSqrs);
