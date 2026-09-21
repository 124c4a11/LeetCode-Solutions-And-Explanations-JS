/**
 * @param {number[]} nums
 * @return {number}
 */
function maxAscendingSum(nums) {
  let result = nums[0];
  let currSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      currSum = 0;
    }

    currSum += nums[i];

    result = Math.max(result, currSum);
  }

  return result;
};