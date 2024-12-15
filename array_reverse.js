const reverse = function (storage, element) {
  storage.unshift(element);

  return storage;
};

const reverseArray = function (array) {
  return array.reduce(reverse, []);
};