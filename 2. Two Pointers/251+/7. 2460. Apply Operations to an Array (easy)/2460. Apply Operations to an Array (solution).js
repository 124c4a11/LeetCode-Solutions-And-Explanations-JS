/**
 * @param {number[]} nums
 * @return {number[]}
 */
function applyOperations(nums) {
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] !== nums[i + 1]) continue;

    nums[i] *= 2;
    nums[i + 1] = 0;
  }

  let l = 0;
  for (let r = 0; r < n; r++) {
    if (nums[r] === 0) continue;

    const tmp = nums[l];

    nums[l] = nums[r];
    nums[r] = tmp;

    l++;
  }

  return nums;
}
