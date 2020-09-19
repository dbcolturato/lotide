const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });
  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []); 
  });
  it("returns []] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
