/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countPairs(nums, k) {
  const n = nums.length;

  let pairsCnt = 0;
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (
        nums[i] === nums[j]
        && i * j % k === 0
      ) pairsCnt++;
    }
  }

  return pairsCnt;
}
