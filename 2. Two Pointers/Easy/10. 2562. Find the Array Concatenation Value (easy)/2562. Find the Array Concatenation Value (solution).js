/**
 * @param {number[]} nums
 * @return {number}
 */
function findTheArrayConcVal(nums) {
  let concVal = 0;
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    concVal += Number(`${nums[l]}${nums[r]}`);

    l++;
    r--;
  }

  if (l === r) concVal += nums[l];

  return concVal;
}
