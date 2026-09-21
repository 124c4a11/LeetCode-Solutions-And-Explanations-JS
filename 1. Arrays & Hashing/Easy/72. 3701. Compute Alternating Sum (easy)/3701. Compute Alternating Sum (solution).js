/**
 * @param {number[]} nums
 * @return {number}
 */
function alternatingSum(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i & 1) result -= nums[i];
    else result += nums[i];
  }

  return result;
}
