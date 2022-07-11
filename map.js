const eqArrays = function (arr1, arr2) {
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


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6];

assertArrayEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArrayEqual(map(numbers, x => x * 2), [2, 4, 6, 8, 10, 12]);
assertArrayEqual(map(numbers, x => x % 2), [1, 0, 1, 0, 1, 0]);


