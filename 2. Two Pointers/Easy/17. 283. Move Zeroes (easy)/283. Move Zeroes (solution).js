/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) continue;

    const tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;

    l++;
  }
}
