/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumAverage(nums) {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  let minAverage = Infinity;
  for (let i = 0; i < n / 2; i++) {
    const currAverage = (nums[i] + nums[n - i - 1]) / 2;

    minAverage = Math.min(minAverage, currAverage);
  }

  return minAverage;
}
