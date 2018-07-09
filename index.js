/**
 * Removes all the duplicate items from the collection
 * @param {Array} inpArray
 * @returns {Array}
 */
const removeDuplicateItems = (inpArray) => {
  const outArray = [];
  let i = 0;
  let j = 0;
  let k = 0;
  let x;
  for (i = 0; i < inpArray.length; i += 1) {
    x = 0;
    for (j = 0; j < outArray.length; j += 1) {
      if (outArray[j] === inpArray[i]) {
        x = 1;
        break;
      }
    }
    if (x === 0) {
      outArray[k] = inpArray[i];
      k += 1;
    }
  }
  return outArray;
};

module.exports = removeDuplicateItems;
