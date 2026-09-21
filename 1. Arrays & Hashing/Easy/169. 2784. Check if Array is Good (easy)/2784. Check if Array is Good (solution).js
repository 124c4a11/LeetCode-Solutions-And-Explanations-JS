/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isGood(nums) {
  const max = nums.length - 1;

  const numToFreq = new Int32Array(201);
  for (const num of nums) numToFreq[num]++;

  if (numToFreq[max] !== 2) return false;

  for (let num = 1; num < max; num++) {
    if (numToFreq[num] !== 1) return false;
  }

  return true;
}
