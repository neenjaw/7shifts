function add(numberString) {
  return numberString
    .split(",")
    .map(Number)
    .reduce((runningSum, number) => runningSum + number, 0);
}

module.exports = add;
