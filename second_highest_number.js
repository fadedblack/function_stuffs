const getWinnerRunnerUp = function ([secondHighest, highest], element) {
  if (element > highest) {
    secondHighest = highest;
    highest = element;
  }

  if (element > secondHighest && element !== highest) {
    secondHighest = element;
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

// console.log(secondHighest([1, 2, 3, 4]));
// console.log(secondHighest([1, 2, 4, 4]));
// console.log(secondHighest([4,3,2,1]));

// Edge Case
// console.log(secondHighest([4, 4, 4, 4]));
