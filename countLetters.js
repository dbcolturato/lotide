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

module.exports = countLetters;

