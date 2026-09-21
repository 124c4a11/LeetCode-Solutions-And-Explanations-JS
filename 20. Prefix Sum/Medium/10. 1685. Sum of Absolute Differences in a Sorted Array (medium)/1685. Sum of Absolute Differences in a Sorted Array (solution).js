/**
 * @param {number[]} nums
 * @return {number[]}
 */
function getSumAbsoluteDifferences(nums) {
  const n = nums.length;
  const totalSum = nums.reduce((a, b) => a + b, 0);

  const result = new Array(n);
  let prefixSum = 0;
  for (let i = 0; i < n; i++) {
    const leftPart = nums[i] * i - prefixSum;
    const rightPart = totalSum - prefixSum - nums[i] * (n - i);

    result[i] = leftPart + rightPart;

    prefixSum += nums[i];
  }

  return result;
}
