/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  for (const num of nums) {
    const i = Math.abs(num) - 1;
    nums[i] = -Math.abs(nums[i]);
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }

  return result;
}
