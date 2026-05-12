/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumCost(nums) {
  let minA = 50;
  let minB = 50;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num < minA) {
      minB = minA;
      minA = num;
    } else if (num < minB) {
      minB = num;
    }
  }

  return nums[0] + minA + minB;
}
