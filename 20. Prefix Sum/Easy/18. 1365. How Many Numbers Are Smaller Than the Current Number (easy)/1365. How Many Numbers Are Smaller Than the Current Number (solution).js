/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
  const n = nums.length;
  const m = Math.max(...nums) + 1;

  const numToPrefixSum = new Int32Array(m);
  for (const num of nums) numToPrefixSum[num]++;

  for (let i = 1; i < m; i++) {
    numToPrefixSum[i] += numToPrefixSum[i - 1];
  }

  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    result[i] = num === 0 ? 0 : numToPrefixSum[num - 1];
  }

  return result;
}
