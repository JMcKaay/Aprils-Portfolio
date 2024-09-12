const squares = document.querySelectorAll('.square');
const positions = ['hero', 'left-top', 'left-bottom'];
let currentState = 0;

function updateSquarePositions() {
  squares.forEach((square, index) => {
    square.className = `square square${index + 1} ${positions[(currentState + index) % 3]}`;
  });
}

function rotatePositions(clickedIndex) {
  currentState = (3 - clickedIndex) % 3;
  updateSquarePositions();
}

squares.forEach((square, index) => {
  square.addEventListener('click', () => rotatePositions(index));
});

// Initialize square positions
updateSquarePositions();