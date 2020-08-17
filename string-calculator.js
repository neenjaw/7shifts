const DELIMITER_CONTROL_CODE_SEPARATOR = "\n";

/**
 * Takes a string of the form “//[delimiter]\n[delimiter separated numbers]”
 * and adds the numbers
 */
function add(combinedString) {
  const splitAt = combinedString.indexOf(DELIMITER_CONTROL_CODE_SEPARATOR);

  const delimiterControlCode = combinedString.substring(0, splitAt);
  const delimiter = delimiterControlCode[2];

  const numberString = combinedString.substring(splitAt + 1);

  const numbers = numberString
    .split(delimiter)
    .map(Number)
    .filter(outNumbersGreaterThan(1000));

  const negativeNumbers = numbers.filter(outNonNegativeNumbers);

  if (negativeNumbers.length > 0) {
    const negativeNumberString = negativeNumbers.join(", ");
    throw new Error(
      `Negatives not allowed. Number(s) causing error: ${negativeNumberString}`
    );
  }

  return numbers.reduce((runningSum, number) => runningSum + number, 0);
}

function outNonNegativeNumbers(number) {
  return number < 0;
}

function outNumbersGreaterThan(limit) {
  return (number) => number < limit;
}

module.exports = add;
