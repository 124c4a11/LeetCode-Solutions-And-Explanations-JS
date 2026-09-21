/**
 * @param {number[]} nums
 * @return {boolean}
 */
function findSubarrays(nums) {
  const sumSet = new Set();
  for (let i = 1; i < nums.length; i++) {
    const sum = nums[i - 1] + nums[i];

    if (sumSet.has(sum)) return true;

    sumSet.add(sum);
  }

  return false;
}
