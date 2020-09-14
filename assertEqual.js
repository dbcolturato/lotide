const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${String.fromCodePoint(9989)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${String.fromCodePoint(10060)} Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("test assert", "test assert");
assertEqual(2, 5);