const noOfRows = 16;
const noOfCols = 16;

function displayGrid(rows, cols){
  const container = document.querySelector('.container');

  const square = document.createElement('div');
  const rowGaps = 5 * noOfRows;
  const colGaps = 10 * noOfCols;

  const totalSquares = noOfRows * noOfCols;

  square.setAttribute('class', 'square');

  container.appendChild(square);

  const squareWidth = square.offsetWidth;
  const squareHeight = square.offsetHeight;
  const containerWidth = squareWidth * noOfCols
  const containerHeight = squareHeight * noOfRows;

  container.className = 'container';

  container.style.width =  `${containerWidth+colGaps}px`;
  container.style.height = `${containerHeight+rowGaps}px`;

  let noOfSquares = 1;
  while (noOfSquares < totalSquares) {
    const squareCopy = square.cloneNode(true);
    container.appendChild(squareCopy);
    noOfSquares++;
  }
}

displayGrid(noOfRows, noOfCols);