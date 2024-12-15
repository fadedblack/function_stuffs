const getWinnerRunnerUp = function ([secondHighest, highest], element) {
  if (element >= highest) {
    secondHighest = highest;
    highest = element;
  }

  return [secondHighest, highest];
};

const validArray = function (array) {
  return array.length > 1;
};

const secondHighest = function (array) {
  if (validArray(array)) {
    return array.reduce(getWinnerRunnerUp, [-Infinity, -Infinity])[0];
  }

  return array[0];
};