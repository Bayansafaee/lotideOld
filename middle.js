const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const middle = function(array) {
  let arrMid = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 != 0) {
    arrMid.push(array[Math.floor(array.length / 2)]);
    return arrMid; 
  } else {
    arrMid.push(array[(array.length / 2) -1]);
    arrMid.push(array[(array.length / 2)]);
    return arrMid;
  }
}; 

 assertEqual(eqArrays(middle([1]), []), true);
 assertEqual(eqArrays(middle([1]), [1]), false);
 assertEqual(eqArrays(middle([1,2]), []), true);
 assertEqual(eqArrays(middle([1,2]), [1,2]), false);
 assertEqual(eqArrays(middle([1,2,3]), [2]), true);
 assertEqual(eqArrays(middle([1,2,3]), []), false);
 assertEqual(eqArrays(middle([1,2,3,4]), [2,3]), true);
 assertEqual(eqArrays(middle([1,2,3,4]), []), false);