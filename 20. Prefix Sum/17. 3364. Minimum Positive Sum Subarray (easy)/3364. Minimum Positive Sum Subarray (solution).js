/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
function minimumSumSubarray(nums, l, r) {
  const n = nums.length;

  let result = Infinity;
  for (let i = 0; i <= n - l; i++) {
    let currSum = 0;
    for (let j = i; j < Math.min(i + r, n); j++) {
      const subarrayLen = j - i + 1;

      currSum += nums[j];

      if (
        currSum > 0
        && l <= subarrayLen
      ) result = Math.min(result, currSum);
    }
  }

  return result === Infinity ? -1 : result;
}
