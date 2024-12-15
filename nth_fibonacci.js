const range = function (from, to, jump) {
  const numbers = [];

  for (let index = from; index < to; index += jump) {
    numbers.push(index);
  }

  return numbers;
};

const fibonacci = function ([previousTerm, nextTerm]) {
  return [nextTerm, previousTerm + nextTerm];
};

const nthfibonacci = function (noOfTerms) {
  return range(0, noOfTerms, 1).reduce(fibonacci, [-1, 1])[1];
};
