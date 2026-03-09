/**
 * @param {number[]} nums
 * @return {number}
 */
function longestBalanced(nums) {
  const n = nums.length;

  let maxSubarrayLen = 0;
  const numToSeenAt = new Int32Array(Math.max(...nums) + 1);
  for (let i = 0; i < n; i++) {
    if (maxSubarrayLen >= n - i) break;

    let uniqueParityBalance = 0;
    for (let j = i; j < n; j++) {
      const num = nums[j];

      if (numToSeenAt[num] != i + 1) {
        uniqueParityBalance += (num & 1) ? 1 : -1;
        numToSeenAt[num] = i + 1;
      }

      if (uniqueParityBalance === 0) {
        maxSubarrayLen = Math.max(maxSubarrayLen, j - i + 1);
      }
    }
  }

  return maxSubarrayLen;
}
