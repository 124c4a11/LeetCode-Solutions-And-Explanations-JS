/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isMonotonic(nums) {
  if (nums.length <= 2) return true;

  let isInc = true;
  let isDec = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) isDec = false;
    if (nums[i - 1] > nums[i]) isInc = false;

    if (!isInc && !isDec) return false;
  }

  return true;
};
