function isOverPopulated(neighbourCount) {
  // console.log('neighbourCount: ' + neighbourCount)
  if (neighbourCount > 3) {
    return true
  } else {
    return false
  }
}

module.exports = isOverPopulated
