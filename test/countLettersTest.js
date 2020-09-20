const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

assertEqual(JSON.stringify(countLetters("LHLh")), '{"l":2,"h":2}');
assertEqual(JSON.stringify(countLetters("Be Happy")), '{"b":1,"e":1,"h":1,"a":1,"p":2,"y":1}');
assertEqual(JSON.stringify(countLetters("free")), '{"f":1,"r":1,"e":2}');
