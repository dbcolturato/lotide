const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${String.fromCodePoint(9989)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${String.fromCodePoint(10060)} Assertion Failed: ${actual} !== ${expected}`);
  }

};

function head(array) {
  if (array.length === 0) {
    return undefined;
  } else return array[0];
};



assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 7);
assertEqual(head([7]), 8);
assertEqual(head([]), undefined);