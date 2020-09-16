const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${String.fromCodePoint(9989)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${String.fromCodePoint(10060)} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArray = function(array1, array2) {
  return Array.isArray(array1)
    && Array.isArray(array2)
    && array1.length === array2.length
    && array1.every((value, index) => value === array2[index]);
};

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const value of Object.keys(obj1)) {
    if (Array.isArray(obj1[value])) {
      if (!eqArray(obj1[value], obj2[value]))
        return false;
    } else if (obj1[value] !== obj2[value]) {
      return false;
    }
  }

  return true;
};

const ab = { a:"1", b: "2" };
const ba = { b:"2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a:"1", b: "2", c:"3"};
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
