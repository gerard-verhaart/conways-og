const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds(rowIndex, columnIndex, board) {
  let indexOutOfBounds = false
  try {
    board[rowIndex][columnIndex]
  } catch {
    return true
  }
  return indexOutOfBounds
}

module.exports = indicesAreOutOfBounds
