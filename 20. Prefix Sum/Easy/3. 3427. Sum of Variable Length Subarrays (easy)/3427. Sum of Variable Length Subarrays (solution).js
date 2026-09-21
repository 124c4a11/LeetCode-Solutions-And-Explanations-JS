/**
 * @param {number[]} nums
 * @return {number}
 */
function subarraySum(nums) {
  const n = nums.length;

  const prefixSums = new Int32Array(n + 1);
  for (let i = 0; i < n; i++) {
    prefixSums[i + 1] = prefixSums[i] + nums[i];
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    const start = Math.max(0, i - nums[i]);
    const subarraySum = prefixSums[i + 1] - prefixSums[start];

    result += subarraySum;
  }

  return result;
}
