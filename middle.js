const eqArray = function(array1, array2) {
  return Array.isArray(array1)
    && Array.isArray(array2)
    && array1.length === array2.length
    && array1.every((value, index) => value === array2[index]);
};

const assertArraysEqual = function(actual, expected) {
  if (eqArray(actual, expected)) {
    return console.log(`${String.fromCodePoint(9989)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${String.fromCodePoint(10060)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  if (array.length === 1 || array.length === 2 || array.length === 0) return [];
  if (array.length % 2 === 0) {
    return [array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]];
  } else return [array[Math.floor(array.length / 2)]];
};

assertArraysEqual(middle([2]), []);
assertArraysEqual(middle([2, 5]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 5]), [2]);
assertArraysEqual(middle([]), []);