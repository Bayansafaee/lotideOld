const map = require('../map');
const assertArrayEqual = require('../assertArrayEqual');


const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6];

assertArrayEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArrayEqual(map(numbers, x => x * 2), [2, 4, 6, 8, 10, 12]);
assertArrayEqual(map(numbers, x => x % 2), [1, 0, 1, 0, 1, 0]);