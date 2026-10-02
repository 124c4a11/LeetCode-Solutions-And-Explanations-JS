/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumSwaps(nums) {
  let swapsCnt = 0;
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    while (nums[l] !== 0 && l < r) l++;
    while (nums[r] === 0 && l < r) r--;

    if (l === r) break;

    const tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;

    swapsCnt++;

    l++;
    r--;
  }

  return swapsCnt;
}
