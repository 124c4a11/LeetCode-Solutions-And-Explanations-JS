/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    if ((nums[l] & 1) === 1) {
      const tmp = nums[l];

      nums[l] = nums[r];
      nums[r] = tmp;

      r--;
    } else {
      l++;
    }
  }

  return nums;
}
