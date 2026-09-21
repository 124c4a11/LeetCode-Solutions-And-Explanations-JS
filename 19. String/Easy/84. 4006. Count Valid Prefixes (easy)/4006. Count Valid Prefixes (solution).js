/**
 * @param {string} s
 * @return {number}
 */
function countValidPrefixes(s) {
  let validPrefixesCnt = 0;
  let balance = 0;
  for (const char of s) {
    balance += char === '1' ? 1 : -1;

    if (Math.abs(balance) <= 1) {
      validPrefixesCnt++;
    }
  }

  return validPrefixesCnt;
}
