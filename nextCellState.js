const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState(cellState, neighbourCount) {
  let nextState
  if (isOverPopulated(neighbourCount)) {
    nextState = false
  } else if (isRessurectable(neighbourCount)) {
    nextState = true
  } else if (isUnderPopulated(neighbourCount)) {
    nextState = false
  } else {
    nextState = cellState
  }
  return nextState
}

module.exports = nextCellState
