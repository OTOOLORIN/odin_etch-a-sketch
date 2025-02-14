const noOfSqrs = 16;

const totalSqrs = 16**2;

function displayGrid(totalSqrs) {

  const grid = document.querySelector('.container');
  const square = document.createElement('div');

  const gridWidth = grid.offsetWidth;
  const squareSize = gridWidth / totalSqrs;

  console.log(squareSize); 
}