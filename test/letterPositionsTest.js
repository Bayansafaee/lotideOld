const letterPositions = require('../letterPositions');
const assertObjectsEqual = require('../assertObjectsEqual');


const macAndCheese = {
  m: ['0'],
  a: ['1', '3'],
  c: ['2', '6'],
  n: ['4'],
  d: ['5'],
  h: ['7'],
  e: ['8', '9', '11'],
  s: ['10']
};

assertObjectsEqual(letterPositions("mac and cheese"), macAndCheese);