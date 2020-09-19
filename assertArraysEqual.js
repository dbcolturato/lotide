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
module.exports = assertArraysEqual;

// assertEqual([1, 2, 3], [1, 2, 3]);
// assertEqual([1, 2, 3], [1, 2, 4]);
// assertEqual([8], [1]);
