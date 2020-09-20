const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

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