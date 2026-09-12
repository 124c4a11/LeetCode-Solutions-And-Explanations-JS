/**
 * @param {string} word
 * @return {number}
 */
function numDifferentIntegers(word) {
  const uniqueNums = new Set();
  const currDigits = [];
  for (const char of word) {
    const digit = Number(char);

    if (Number.isNaN(digit)) {
      if (currDigits.length) {
        uniqueNums.add(currDigits.join('').replace(/^0+/g, ''));
      }

      currDigits.length = 0;
    } else {
      currDigits.push(digit);
    }
  }

  if (currDigits.length) {
    uniqueNums.add(currDigits.join('').replace(/^0+/g, ''));
  }

  return uniqueNums.size;
}
