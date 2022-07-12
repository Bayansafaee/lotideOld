const letterPositions = function (sentence) {
  const results = {};
  const stringMod = (sentence.replace(/\s+/g, ''));
  for (const letter in stringMod) {
    if (results[stringMod[letter]] === undefined) {
      results[stringMod[letter]] = [letter];
    } else {
      results[stringMod[letter]].push(letter);
    }
  }
  return results;
};

module.exports = letterPositions;


