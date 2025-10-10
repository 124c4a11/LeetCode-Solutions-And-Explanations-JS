/**
 * @param {number[]} nums
 * @return {number}
 */
function longestMonotonicSubarray(nums) {
  if (!nums.length) return 0;

  let result = 1;
  let inc = 1;
  let dec = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      inc = dec = 1;
    } else if (nums[i - 1] < nums[i]) {
      inc++;
      dec = 1;
    } else {
      inc = 1;
      dec++;
    }

    result = Math.max(result, inc, dec);
  }

  return result;
}