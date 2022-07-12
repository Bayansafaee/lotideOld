const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  const results = {};
  const stringMod = (string.replace(/\s+/g, ''));
  for (const letter in stringMod) {
    if (results[stringMod[letter]] === undefined) {
      results[stringMod[letter]] = 1;
    } else {
      results[stringMod[letter]] += 1;
    }
  }
  return results;
};

module.exports = countLetters;