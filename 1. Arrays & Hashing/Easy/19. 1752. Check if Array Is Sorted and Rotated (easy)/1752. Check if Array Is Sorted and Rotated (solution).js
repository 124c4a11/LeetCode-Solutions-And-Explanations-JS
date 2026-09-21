/**
 * @param {number[]} nums
 * @return {boolean}
 */
function check(nums) {
  const n = nums.length;

  let decreaseCnt = 0;
  for (let i = 1; i <= n; i++) {
    if (
      nums[i - 1] > nums[i % n]
      && ++decreaseCnt > 1
    ) return false;
  }

  return true;
};