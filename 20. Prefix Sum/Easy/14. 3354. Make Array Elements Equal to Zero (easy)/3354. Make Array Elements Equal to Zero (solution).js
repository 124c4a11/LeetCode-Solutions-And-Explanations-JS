/**
 * @param {number[]} nums
 * @return {number}
 */
function countValidSelections(nums) {
  let result = 0;
  let leftSum = 0;
  let rightSum = nums.reduce((a, b) => a + b, 0);
  for (const num of nums) {
    if (num > 0) {
      leftSum += num;
      rightSum -= num;
    } else {
      result += Math.max(0, 2 - Math.abs(leftSum - rightSum));
    }
  }

  return result;
}
