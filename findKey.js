const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, cb) => {
  for (let key of Object.keys(object)) {
    if (cb(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;


const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const testKey1 = x => x.stars === 2;
const testKey2 = x => x.stars === 4;

const test1 = findKey(testObj, testKey1); // => "noma"
const test2 = findKey(testObj, testKey2); // => "undefined"

assertEqual(test1, 'noma');
assertEqual(test2, undefined);