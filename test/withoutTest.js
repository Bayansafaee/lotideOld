const without = require('../without');
const assertArrayEqual = require('../assertArrayEqual');

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without([1, "1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);