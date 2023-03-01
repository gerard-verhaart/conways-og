const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard(currentBoard) {
  let nextBoard = [...currentBoard]
  // console.log(nextBoard)
  for (let row = 0; row < currentBoard.length; row++) {
    for (let col = 0; col < currentBoard[row].length; col++) {
      let currentCell = Boolean(currentBoard[row][col])
      let aliveNeighbours = Number(countAliveNeighbours(row, col, nextBoard))
      nextBoard[row][col] = Boolean(nextCellState(currentCell, aliveNeighbours))
    }
  }
  // console.log('This Board ', currentBoard[1][1])
  // console.log('Next Board ', nextBoard[1][1])
  // console.log(
  //   'Alive Neighbours ',
  //   Number(countAliveNeighbours(1, 1, nextBoard))
  // )
  return nextBoard
}

module.exports = nextBoard
