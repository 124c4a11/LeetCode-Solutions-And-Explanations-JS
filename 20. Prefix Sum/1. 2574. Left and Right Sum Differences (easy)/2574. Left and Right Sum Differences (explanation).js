/**
 * @param {number[]} nums
 * @return {number[]}
 */
function leftRightDifference(nums) {
  const result = [];
  let leftSum = 0;
  let rightSum = nums.reduce((a, b) => a + b, 0);
  for (const num of nums) {
    rightSum -= num;

    result.push(Math.abs(leftSum - rightSum));

    leftSum += num;
  }

  return result;
}
