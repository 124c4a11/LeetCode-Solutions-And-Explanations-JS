/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findPrefixScore(nums) {
  const n = nums.length;

  const result = new Array(n);
  let max = 0;
  let score = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, nums[i]);
    score += nums[i] + max;
    result[i] = score;
  }

  return result;
}
