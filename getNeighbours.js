const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

function getNeighbours(cellRow, cellColumn, board) {
  // console.log(cellRow, ' : ', cellColumn)
  // console.log(board)
  let getAllNeighbours = []
  for (let i = -1; i < 2; i++) {
    let tryRowIndex = Number(cellRow + i)
    for (let j = -1; j < 2; j++) {
      let tryColIndex = Number(cellColumn + j)
      if (!indicesAreOutOfBounds(tryRowIndex, tryColIndex, board)) {
        if (i === 0 && j === 0) {
          // Skip middle cell
        } else {
          getAllNeighbours.push(board[tryRowIndex][tryColIndex])
        }
      }
    }
  }
  return getAllNeighbours
}

module.exports = getNeighbours
