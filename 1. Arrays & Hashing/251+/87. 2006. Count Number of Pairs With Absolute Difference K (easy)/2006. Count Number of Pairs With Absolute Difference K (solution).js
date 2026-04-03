/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countKDifference(nums, k) {
  let pairsCnt = 0;
  const numToFreq = new Map();
  for (const num of nums) {
    pairsCnt += (numToFreq.get(num - k) ?? 0) + (numToFreq.get(num + k) ?? 0);

    numToFreq.set(num, (numToFreq.get(num) ?? 0) + 1);
  }

  return pairsCnt;
}
