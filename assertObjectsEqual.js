const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`${String.fromCodePoint(9989)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`${String.fromCodePoint(10060)} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;