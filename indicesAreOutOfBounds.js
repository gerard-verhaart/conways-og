const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds(rowIndex, columnIndex, board) {
  let rowOutOfBounds = true
  let columnOutOfBounds = true
  let indexOutOfBounds = true
  if (rowIndex < board.length && rowIndex >= 0) {
    rowOutOfBounds = false
  }
  if (columnIndex < board.length && columnIndex >= 0) {
    columnOutOfBounds = false
  }

  if (!rowOutOfBounds && !columnOutOfBounds) {
    indexOutOfBounds = false
  }
  return indexOutOfBounds
}

module.exports = indicesAreOutOfBounds
