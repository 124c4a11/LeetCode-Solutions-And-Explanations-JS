/**
 * @param {number[]} nums
 * @return {number[]}
 */
function concatWithReverse(nums) {
  const n = nums.length;

  const result = new Array(n * 2);
  let r = n - 1;
  for (let i = 0; i < n * 2; i++) {
    if (i < n) result[i] = nums[i];
    else result[i] = nums[r--];
  }

  return result;
}
