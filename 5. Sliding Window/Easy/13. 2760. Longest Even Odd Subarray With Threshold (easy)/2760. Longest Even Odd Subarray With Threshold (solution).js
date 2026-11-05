/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
function longestAlternatingSubarray(nums, threshold) {
  const n = nums.length;

  let maxLength = 0;
  for (let l = 0; l < n; l++) {
    if (
      nums[l] % 2 !== 0
      || nums[l] > threshold
    ) continue;

    let r = l + 1;
    while (
      r < n
      && nums[r] % 2 !== nums[r - 1] % 2
      && nums[r] <= threshold
    ) r++;

    maxLength = Math.max(maxLength, r - l);
  }

  return maxLength;
}
