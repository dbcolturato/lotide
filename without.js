const without = function(array1, array2) {
  let arrayRes = Array.from(array1);
  for (let a of array2) {
    arrayRes = arrayRes.filter(value => value !== a);
  }
  return arrayRes;
};

module.exports = without;



