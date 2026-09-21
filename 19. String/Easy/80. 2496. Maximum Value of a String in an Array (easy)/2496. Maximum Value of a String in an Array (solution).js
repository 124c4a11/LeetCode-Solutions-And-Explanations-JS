/**
 * @param {string[]} strs
 * @return {number}
 */
function maximumValue(strs) {
  let maxVal = 0;
  for (const str of strs) {
    const num = Number(str);

    if (isNaN(num)) {
      maxVal = Math.max(maxVal, str.length);
    } else {
      maxVal = Math.max(maxVal, num);
    }
  }

  return maxVal;
}
