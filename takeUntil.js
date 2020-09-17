const eqArray = function(array1, array2) {
  return Array.isArray(array1)
    && Array.isArray(array2)
    && array1.length === array2.length
    && array1.every((value, index) => value === array2[index]);
};

const assertEqual = function(actual, expected) {
  if (eqArray(actual, expected)) {
    return console.log(`${String.fromCodePoint(9989)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${String.fromCodePoint(10060)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const takeUntil = function(array, callback) {
  const results = [];

   for (const [index, item]  of array.entries()) {
     if (!callback(item)) {
       if (index === array.length - 1) {
        results.push(item);
        return results;
       } else results.push(item);
     } else return results;
}
};

const d1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const d2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const d3 = [1, 2, 5, 7, 2, 1, 2, 4, 5];
const d4 = [-1, 2, 5, 7, 2, 1, 2, 4, 5];

assertEqual((takeUntil(d1, x => x < 0)), [1, 2, 5, 7, 2]);
assertEqual((takeUntil(d2, x => x === ',')), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertEqual((takeUntil(d3, x => x < 0)), [1, 2, 5, 7, 2, 1, 2, 4, 5]);
assertEqual((takeUntil(d4, x => x < 0)), []);
