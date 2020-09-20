const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const w1 = ["ground", "control", "to", "major", "tom"];
const w2 = ["dog", "cat", "rat"];
const w3 = ["001", "122", "526"];
const w4 = [];

assertArraysEqual(map(w1, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(w2, word => word[0]), ['d', 'c', 'r']);
assertArraysEqual(map(w3, word => word[0]), ['0', '2', '5']);
assertArraysEqual(map(w4, word => word[0]), []);
