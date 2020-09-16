const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${String.fromCodePoint(9989)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${String.fromCodePoint(10060)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
 
  let lowercase = sentence.toLowerCase();

  for (let pos = 0; pos < lowercase.length; pos++) {
    let char = lowercase[pos];
    let positions = results[char];
    if (lowercase[pos] !== " ") {
      if (positions)
        results[char].push(pos);
      else
        results[char] = [pos];
    }
  }

  return results;
};

assertEqual(JSON.stringify(letterPositions("Bee")), '{"b":[0],"e":[1,2]}');
assertEqual(JSON.stringify(letterPositions("Lighthouse in the house")), '{"l":[0],"i":[1,11],"g":[2],"h":[3,5,15,18],"t":[4,14],"o":[6,19],"u":[7,20],"s":[8,21],"e":[9,16,22],"n":[12]}');


