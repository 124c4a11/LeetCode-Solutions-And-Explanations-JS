/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isPossibleToSplit(nums) {
  const numToFreq = new Int32Array(101);
  for (const num of nums) {
    const freq = ++numToFreq[num];

    if (freq > 2) return false;
  }

  return true;
}
