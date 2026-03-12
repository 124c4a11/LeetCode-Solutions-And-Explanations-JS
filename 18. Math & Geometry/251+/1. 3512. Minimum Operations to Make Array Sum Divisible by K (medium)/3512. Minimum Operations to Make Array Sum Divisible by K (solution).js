/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
  const totalSum = nums.reduce((a, b) => a + b, 0);

  return totalSum % k;
}
