const eqArray = function(array1, array2) {
  return Array.isArray(array1)
    && Array.isArray(array2)
    && array1.length === array2.length
    && array1.every((value, index) => value === array2[index]);
};

const assertEqual = function(actual, expected) {
  if (eqArray(actual, expected)) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(array1, array2) {
  let arrayRes = Array.from(array1);
  for (let a of array2) {
    arrayRes = arrayRes.filter(value => value !== a);
  }
  return arrayRes;
};

assertEqual(without([1, 2, 3], [1]), [2, 3]);
assertEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertEqual(without([1, 2, 3], [4]), [1, 2, 3]);
assertEqual(without([], [1]), []);
assertEqual(without([1, 2, 3], [2, 3]), [1]);


