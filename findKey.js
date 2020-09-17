const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${String.fromCodePoint(9989)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${String.fromCodePoint(10060)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(group, callback) {

  let groups = Object.keys(group);
  for (const key of groups) {
    if (callback(group[key])) {
      return key;
    }
  }
  return undefined;
};


const starsList = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(starsList, x => x.stars === 2), "noma");
assertEqual(findKey(starsList, x => x.stars === 0), undefined);

