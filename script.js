const noOfSqrs = 16;
const body = document.querySelector('body');
let grid = document.querySelector('.container');
const newGridBtn = document.querySelector('.new-grid');
const colorBtn = document.querySelector('.random-colors');
const style = document.createElement('style');
const root = document.documentElement;

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

function generateNewGrid() {
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
  
  // remove random color activation sign
  colorBtn.classList.remove('border');
  setHoverEffect();
}

function generateRandomColor() {
  const colorNumber = Math.floor(Math.random()*255) + 1;
  return colorNumber;
} 

displayGrid(noOfSqrs);
setHoverEffect();

newGridBtn.addEventListener('click', generateNewGrid);

colorBtn.addEventListener('dblclick', () => {
  colorBtn.classList.toggle('border');

  grid.addEventListener('mouseover', (evt) => {
    const square = evt.target;
    let currentColor = getComputedStyle(root).getPropertyValue('--random-color');
    let colorCode = generateRandomColor;
    
    currentColor = `rgb(${colorCode()}, ${colorCode()}, ${colorCode()})`;
    root.style.setProperty('--random-color', currentColor);
    square.classList.toggle('randomize');
    square.classList.toggle('hover-in');
  })

  grid.addEventListener('mouseout', (evt) => {
    const square = evt.target;
    square.classList.toggle('randomize');
    square.classList.toggle('hover-in');
  })
})