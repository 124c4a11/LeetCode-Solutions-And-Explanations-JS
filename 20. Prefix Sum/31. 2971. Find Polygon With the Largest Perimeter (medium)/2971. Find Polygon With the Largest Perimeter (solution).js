/**
 * @param {number[]} nums
 * @return {number}
 */
function largestPerimeter(nums) {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  let maxPerimeter = -1;
  let prefixSum = nums[0] + nums[1];
  for (let i = 2; i < n; i++) {
    const num = nums[i];

    if (prefixSum > num) {
      maxPerimeter = prefixSum + num;
    }

    prefixSum += num;
  }

  return maxPerimeter;
}
