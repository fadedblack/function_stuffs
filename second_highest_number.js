const getWinnerRunnerUp = function ([highest, secondHighest], element) {
  if (element < secondHighest) {
    return [highest, secondHighest];
  }

  return [Math.max(highest, element), Math.min(highest, element)];
};

const validArray = function (array) {
  return array.length > 1;
};

const secondHighest = function (array) {
  if (validArray(array)) {
    return array.reduce(getWinnerRunnerUp, [-Infinity, -Infinity])[1];
  }

  return array[0];
};

console.log(secondHighest([1, 2, 3, 4]));
console.log(secondHighest([1, 2, 4, 4]));
console.log(secondHighest([4, 3, 2, 1]));

// Edge Cases
console.log(secondHighest([4]));
console.log(secondHighest([4, 4, 4, 4]));
console.log(secondHighest([-1, -2, -3]));
