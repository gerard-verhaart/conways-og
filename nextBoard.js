const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard(currentBoard) {
  let nextBoard = []
  // console.log(currentBoard)
  // console.log(currentBoard[0])
  for (let row = 0; row < currentBoard.length; row++) {
    nextBoard[row] = []
    for (let col = 0; col < currentBoard[row].length; col++) {
      nextBoard[row][col] = nextCellState(
        currentBoard[row][col],
        countAliveNeighbours(row, col, currentBoard)
      )
    }
  }
  // console.log(nextBoard)
  return nextBoard
}

module.exports = nextBoard
