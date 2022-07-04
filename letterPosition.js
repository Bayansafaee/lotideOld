const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
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

console.log(letterPositions("mac and cheese"));
