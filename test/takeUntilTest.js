const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

const d1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const d2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const d3 = [1, 2, 5, 7, 2, 1, 2, 4, 5];
const d4 = [-1, 2, 5, 7, 2, 1, 2, 4, 5];

assertArraysEqual((takeUntil(d1, x => x < 0)), [1, 2, 5, 7, 2]);
assertArraysEqual((takeUntil(d2, x => x === ',')), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual((takeUntil(d3, x => x < 0)), [1, 2, 5, 7, 2, 1, 2, 4, 5]);
assertArraysEqual((takeUntil(d4, x => x < 0)), []);