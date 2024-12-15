const reverse = function (reversedString, char) {
  return char + reversedString;
};

const reverseString = function (string) {
  return [...string].reduce(reverse, '');
};