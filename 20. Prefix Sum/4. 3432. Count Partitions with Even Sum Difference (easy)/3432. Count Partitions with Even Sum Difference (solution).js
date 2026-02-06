/**
 * @param {number[]} nums
 * @return {number}
 */
function countPartitions(nums) {
  let result = 0;
  let leftSum = 0;
  let rightSum = nums.reduce((a, b) => a + b, 0);
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    rightSum -= nums[i];

    result += (leftSum - rightSum) % 2 ? 0 : 1;
  }

  return result;
}
