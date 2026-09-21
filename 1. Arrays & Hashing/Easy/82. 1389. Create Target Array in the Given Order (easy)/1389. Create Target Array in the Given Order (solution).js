/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
function createTargetArray(nums, index) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.splice(index[i], 0, nums[i]);
  }

  return result;
}
