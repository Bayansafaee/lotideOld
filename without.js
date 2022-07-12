const without = (source, itemsToRemove) => {
  const newArr = source.filter(element => {
    if (!itemsToRemove.includes(element)) {
      return true;
    }
  }
  );
  return newArr;
};

module.exports = without;