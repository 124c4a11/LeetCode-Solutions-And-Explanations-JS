/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function getLucky(s, k) {
  let totalSum = 0;
  for (const char of s) {
    let charNum = char.codePointAt(0) - 97 + 1;
    while (charNum > 0) {
      totalSum += charNum % 10;
      charNum = Math.floor(charNum / 10);
    }
  }

  k--;

  for (let i = 0; i < k; i++) {
    let currSum = 0;
    while (totalSum > 0) {
      currSum += totalSum % 10;
      totalSum = Math.floor(totalSum / 10);
    }

    totalSum = currSum;
  }

  return totalSum;
}
