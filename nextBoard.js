const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard(currentBoard) {
  let nextBoard = []
  for (let i = 0; i < currentBoard.length; i++) {
    nextBoard[i] = []
    for (let j = 0; j < currentBoard[0].length; j++) {
      nextBoard[i][j] = nextCellState(
        currentBoard[i][j],
        countAliveNeighbours(i, j, currentBoard)
      )
    }
  }
  // console.log(nextBoard)
  return nextBoard
}

module.exports = nextBoard
