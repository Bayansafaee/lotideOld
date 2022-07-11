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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  const arrKey1 = Object.keys(obj1);
  const arrKey2 = Object.keys(obj2);
  if (arrKey1.length !== arrKey2.length) {
    return false;
  }
  for (const key of arrKey1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      return eqArrays(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

const obj1 = {
  key1: 1,
  key2: 2,
  key3: 3,
};

const obj2 = {
  key1: 1,
  key2: 2,
  key3: 3,
};

assertObjectsEqual(obj1, obj2);

const obj3 = {
  key1: 0,
  key2: 5,
  key3: 2,
};

assertObjectsEqual(obj1, obj3);