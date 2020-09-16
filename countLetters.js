const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${String.fromCodePoint(9989)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${String.fromCodePoint(10060)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const letters = {};
  let count = 0;
  let lowercase = sentence.split(" ").join("").toLowerCase();

  for (const ch of lowercase) {
    count = letters[ch];
    letters[ch] = count ? count + 1 : 1;
  }

  return letters;
};

assertEqual(JSON.stringify(countLetters("LHLh")), '{"l":2,"h":2}');
assertEqual(JSON.stringify(countLetters("Be Happy")), '{"b":1,"e":1,"h":1,"a":1,"p":2,"y":1}');
assertEqual(JSON.stringify(countLetters("free")), '{"f":1,"r":1,"e":2}');
