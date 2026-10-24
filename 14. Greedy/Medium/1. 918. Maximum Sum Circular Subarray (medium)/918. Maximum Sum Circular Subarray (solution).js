/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubarraySumCircular(nums) {
  let globMin = nums[0];
  let globMax = nums[0];
  let currMin = 0;
  let currMax = 0;
  let total = 0;
  for (const num of nums) {
    currMin = Math.min(currMin + num, num);
    currMax = Math.max(currMax + num, num);
    total += num;
    globMin = Math.min(globMin, currMin);
    globMax = Math.max(globMax, currMax);
  }

  return globMax > 0
    ? Math.max(globMax, total - globMin)
    : globMax;
}
