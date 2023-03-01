const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

function getNeighbours(cellRow, cellColumn, board) {
  // console.log(cellRow, ' : ', cellColumn)
  // console.log(board)
  let getAllNeighbours = []
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (!indicesAreOutOfBounds(i + cellRow, j + cellColumn, board)) {
        if (i === 0 && j === 0) {
          // Skip middle cell
        } else {
          getAllNeighbours.push(board[i + cellRow][j + cellColumn])
        }
      }
    }
  }
  return getAllNeighbours
}

module.exports = getNeighbours
