const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds(rowIndex, columnIndex, board) {
  let indexOutOfBounds = false
  if (isOutOfBounds(rowIndex, board[0])) {
    indexOutOfBounds = true
  }
  if (isOutOfBounds(columnIndex, board[0])) {
    indexOutOfBounds = true
  }
  return indexOutOfBounds
}

module.exports = indicesAreOutOfBounds
