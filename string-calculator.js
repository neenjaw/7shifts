const DELIMITER_CONTROL_CODE_SEPARATOR = '\n'
const DELIMITER_SEPARATOR = ','

/**
 * Takes a string of the form “//[delimiters]\n[delimiter separated numbers]”.
 * It then adds the non-negative numbers less than 1000.
 *
 * Multiple delimiters may be separated by commas ','
 * Delimiters may be of any length
 *
 * Numbers over 1000 are ignored
 * Negative numbers cause an error to be thrown
 */
function add(combinedString) {
  const [delimiterControlCode, numberString] = splitCombinedString(combinedString)
  const delimiterRegex = parseDelimitersFromControlCode(delimiterControlCode)

  const numbers = numberString.split(delimiterRegex).map(Number).filter(numberGreaterThan(1000))

  checkForNegativeNumbers(numbers)

  return numbers.reduce((runningSum, number) => runningSum + number, 0)
}

// Takes the combines string and returns the control code and the number string
function splitCombinedString(combinedString) {
  const splitAt = combinedString.indexOf(DELIMITER_CONTROL_CODE_SEPARATOR)
  const delimiterControlCode = combinedString.substring(0, splitAt)
  const numberString = combinedString.substring(splitAt + 1)
  return [delimiterControlCode, numberString]
}

// Creates a regex for working with multiple delimiters
function parseDelimitersFromControlCode(controlCode) {
  const delimiters = controlCode.substring(2).split(DELIMITER_SEPARATOR)
  const escapedDelimiters = delimiters.map(escapeString)
  return new RegExp(`${escapedDelimiters.join('|')}`)
}

function checkForNegativeNumbers(numbers) {
  const negativeNumbers = numbers.filter(nonNegativeNumber)

  if (negativeNumbers.length > 0) {
    const negativeNumberString = negativeNumbers.join(', ')
    throw new Error(`Negatives not allowed. Number(s) causing error: ${negativeNumberString}`)
  }
}

// For use with Array.prototype.filter
function nonNegativeNumber(number) {
  return number < 0
}

// For use with Array.prototype.filter
function numberGreaterThan(limit) {
  return (number) => number < limit
}

function escapeString(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

module.exports = add
