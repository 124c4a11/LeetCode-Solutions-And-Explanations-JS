/**
 * @param {number[]} nums
 * @return {number[]}
 */
function numberGame(nums) {
  nums.sort((a, b) => a - b);

  let i = 0;
  while (i < nums.length - 1) {
    const tmp = nums[i];

    nums[i] = nums[i + 1];
    nums[i + 1] = tmp;

    i += 2;
  }

  return nums;
}
