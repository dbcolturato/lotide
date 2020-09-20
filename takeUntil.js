const takeUntil = function(array, callback) {
  const results = [];

   for (const [index, item]  of array.entries()) {
     if (!callback(item)) {
       if (index === array.length - 1) {
        results.push(item);
        return results;
       } else results.push(item);
     } else return results;
}
};

module.exports = takeUntil;
