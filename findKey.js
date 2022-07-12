const findKey = (object, cb) => {
  for (let key of Object.keys(object)) {
    if (cb(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;