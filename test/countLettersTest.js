const countLetters = require('../countLetters');
const assertObjectsEqual = require('../assertObjectsEqual');

const lighthouseInTheHouse = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };

assertObjectsEqual(countLetters("lighthouse in the house"), lighthouseInTheHouse);