/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minimumDifference(nums, k) {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  let minDiff = nums.at(-1) - nums[0];
  for (let i = 0; i + k - 1 < n; i++) {
    const currDiff = nums[i + k - 1] - nums[i];

    minDiff = Math.min(minDiff, currDiff);
  }

  return minDiff;
}
