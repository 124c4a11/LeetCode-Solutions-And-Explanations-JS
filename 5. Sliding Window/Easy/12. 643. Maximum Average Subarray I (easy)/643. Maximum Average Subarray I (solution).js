/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  let currSum = 0;
  for (let i = 0; i < k; i++) currSum += nums[i];

  let maxSum = currSum;
  for (let r = k; r < nums.length; r++) {
    currSum += nums[r] - nums[r - k];

    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum / k;
}
