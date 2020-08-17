function add(numberString) {
  return numberString
    .split(/[^\d]+/)
    .map(Number)
    .reduce((runningSum, number) => runningSum + number, 0);
}

module.exports = add;
