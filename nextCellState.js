const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState(cellState, neighbourCount) {
  let nextState = cellState
  // console.log('cellState: ' + cellState)
  // console.log('neighbourCount: ' + neighbourCount)
  if (isOverPopulated(neighbourCount)) {
    nextState = false
  } else if (isRessurectable(neighbourCount)) {
    nextState = true
  } else if (isUnderPopulated(neighbourCount)) {
    nextState = false
  }
  return nextState
}

module.exports = nextCellState
