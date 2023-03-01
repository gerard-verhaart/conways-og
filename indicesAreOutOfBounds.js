const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds(rowIndex, columnIndex, board) {
  let indexOutOfBounds = false
  let size = board.length
  if (rowIndex < 0) {
    indexOutOfBounds = true
  } else if (rowIndex >= size) {
    indexOutOfBounds = true
  }
  if (columnIndex < 0) {
    indexOutOfBounds = true
  } else if (columnIndex >= size) {
    indexOutOfBounds = true
  }
  return indexOutOfBounds
}

module.exports = indicesAreOutOfBounds
