const middle = function(array) {
  if (array.length === 1 || array.length === 2 || array.length === 0) return [];
  if (array.length % 2 === 0) {
    return [array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]];
  } else return [array[Math.floor(array.length / 2)]];
};

module.exports = middle;
