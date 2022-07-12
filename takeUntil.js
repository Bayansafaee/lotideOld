const takeUntil = function (array, callback) {
  const arrSlice = [];
  for (let elm of array) {
    if (callback(elm)) {
      return arrSlice;
    }
    arrSlice.push(elm);
  }
  return arrSlice;
};

module.exports = takeUntil;



