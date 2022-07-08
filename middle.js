const middle = function(array) {
  let arrMid = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    arrMid.push(array[Math.floor(array.length / 2)]);
    return arrMid;
  } else {
    arrMid.push(array[(array.length / 2) - 1]);
    arrMid.push(array[(array.length / 2)]);
    return arrMid;
  }
};

module.exports = middle;
