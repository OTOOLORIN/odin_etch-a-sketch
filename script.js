const noOfSqrs = 16;
const body = document.querySelector('body');
let grid = document.querySelector('.container');
const newGridBtn = document.querySelector('.new-grid');
const style = document.createElement('style');

function displayGrid(noOfSqrs, myGrid=grid) {

  const totalSqrs = noOfSqrs**2;

  const gridWidth = myGrid.offsetWidth;
  const squareSize = gridWidth / noOfSqrs;

  const square = document.createElement('div');
  square.className = 'square';
  style.innerHTML = `.square {width: ${squareSize}px; height: ${squareSize}px;}`;
  document.head.appendChild(style);

  let noOfSquares = 0;
  while (noOfSquares < totalSqrs) {

    const sqrCopy = square.cloneNode(true);
    myGrid.appendChild(sqrCopy);
    noOfSquares++;
  }
}

function toggleHover(evt) {
  if (evt.target.className === 'container') {
    return;
  }
  const gridSquare = evt.target;
  gridSquare.classList.toggle('hover-in');
}

function setHoverEffect() {
  grid.addEventListener('mouseover', toggleHover);

  grid.addEventListener('mouseout', toggleHover);
}

function promptUser() {
  let validityOfSqrs;
  let sqrsPerSide;
  do {
  sqrsPerSide = prompt(`How many squares do you want per side of the new grid?
(enter an integer from 1 - 100 inclusive)`, 16);
  if (sqrsPerSide === null) {
    return;
  }
  sqrsPerSide = +sqrsPerSide;
  validityOfSqrs = (sqrsPerSide < 1) || (Number.isNaN(sqrsPerSide)) || (sqrsPerSide > 100) ||
                    (!Number.isInteger(sqrsPerSide));
}
  while(validityOfSqrs);
  const newGrid = document.createElement('div');
  document.head.removeChild(style);
  newGrid.classList.add('container');
  body.removeChild(grid);
  body.appendChild(newGrid);
  displayGrid(sqrsPerSide, newGrid);
  grid = newGrid;
  setHoverEffect();
}

displayGrid(noOfSqrs);
setHoverEffect();

newGridBtn.addEventListener('click', promptUser);