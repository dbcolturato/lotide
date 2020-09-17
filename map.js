const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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

const w1 = ["ground", "control", "to", "major", "tom"];
const w2 = ["dog", "cat", "rat"];
const w3 = ["001", "122", "526"];
const w4 = [];

assertEqual(map(w1, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertEqual(map(w2, word => word[0]), ['d', 'c', 'r']);
assertEqual(map(w3, word => word[0]), ['0', '2', '5']);
assertEqual(map(w4, word => word[0]), []);



// const results1 = map(words, word => word[0]);
// console.log(results1);