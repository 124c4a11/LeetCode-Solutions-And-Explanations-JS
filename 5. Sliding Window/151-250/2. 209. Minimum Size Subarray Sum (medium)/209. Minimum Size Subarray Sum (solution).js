/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  let result = Infinity;
  let windowSum = 0;
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    windowSum += nums[r];

    while (windowSum >= target) {
      result = Math.min(result, r - l + 1);
      windowSum -= nums[l];
      l++;
    }
  }

  return result === Infinity ? 0 : result;
}
