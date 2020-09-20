const findKey = function(group, callback) {

  let groups = Object.keys(group);
  for (const key of groups) {
    if (callback(group[key])) {
      return key;
    }
  }
  return undefined;
};


module.exports = findKey;

