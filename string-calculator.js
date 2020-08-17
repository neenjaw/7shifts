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

  return numberString
    .split(delimiter)
    .map(Number)
    .reduce((runningSum, number) => runningSum + number, 0);
}

module.exports = add;
