const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${String.fromCodePoint(9989)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${String.fromCodePoint(10060)} Assertion Failed: ${actual} !== ${expected}`);
  }

};
const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const value of Object.keys(obj1)) {
    if (Array.isArray(obj1[value])) {
      if (!eqArrays(obj1[value], obj2[value]))
        return false;
    } else if (obj1[value] !== obj2[value]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;

