/**
 * @param {string} s
 * @return {boolean}
 */
function scoreBalance(s) {
  let rightSum = 0;
  for (const char of s) {
    rightSum += char.codePointAt(0) - 96;
  }

  let leftSum = 0;
  for (const char of s) {
    const charScore = char.codePointAt(0) - 96;

    leftSum += charScore;
    rightSum -= charScore;

    if (leftSum === rightSum) return true;
  }

  return false;
}
