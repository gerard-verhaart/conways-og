function isOutOfBounds(index, array) {
  let outOfBounds = false
  if (index < 0) {
    outOfBounds = true
  } else if (index >= array.length) {
    outOfBounds = true
  }
  return outOfBounds
}

module.exports = isOutOfBounds
