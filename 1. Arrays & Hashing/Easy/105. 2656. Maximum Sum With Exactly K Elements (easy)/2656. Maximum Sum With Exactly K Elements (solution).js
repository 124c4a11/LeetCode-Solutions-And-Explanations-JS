/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maximizeSum(nums, k) {
  let maxSum = 0;
  let max = Math.max(...nums);
  while (k--)
  {
    maxSum += max;
    max++;
  }

  return maxSum;
}
