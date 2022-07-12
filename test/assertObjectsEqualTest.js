const assertObjectsEqual = require('../assertObjectsEqual');

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