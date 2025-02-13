const container = document.querySelector('.container');

const square = document.createElement('div');
const noOfRows = 16;
const noOfCols = 16;
const totalSquares = noOfRows * noOfCols;

square.setAttribute('class', 'square');

container.appendChild(square);

const squareWidth = square.offsetWidth;
const squareHeight = square.offsetHeight;
const containerWidth = squareWidth * noOfCols
const containerHeight = squareHeight * noOfRows;

container.className = 'container';

container.style.width =  `${containerWidth}px`;
container.style.height = `${containerHeight}px`