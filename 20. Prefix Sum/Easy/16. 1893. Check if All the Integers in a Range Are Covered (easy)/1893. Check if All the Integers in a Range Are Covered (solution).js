/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
function isCovered(ranges, left, right) {
  const diffArr = new Int32Array(52);
  for (const range of ranges) {
    diffArr[range[0]]++;
    diffArr[range[1] + 1]--;
  }

  let prefixSum = 0;
  for (let i = 1; i < 52; i++) {
    prefixSum += diffArr[i];

    if (
      prefixSum <= 0
      && left <= i
      && i <= right
    ) return false;
  }

  return true;
}
