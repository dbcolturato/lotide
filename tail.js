// const arrayEquals = function(array1, array2) {
//   return Array.isArray(array1)
//     && Array.isArray(array2)
//     && array1.length === array2.length
//     && array1.every((value, index) => value === array2[index]);
// };

// const assertEqual = function(actual, expected) {
//   if (arrayEquals(actual, expected)) {
//     return console.log(`${String.fromCodePoint(9989)} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     return console.log(`${String.fromCodePoint(10060)} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const tail = function(array) {
  if (array.length === 0 || array.length === 1) {
    return [];
  } else return array.slice(1, array.length);
};

module.exports = tail;






