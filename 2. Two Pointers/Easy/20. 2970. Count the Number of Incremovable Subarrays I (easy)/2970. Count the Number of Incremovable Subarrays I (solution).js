/**
 * @param {number[]} nums
 * @return {number}
 */
function incremovableSubarrayCount(nums) {
  const n = nums.length;

  let prefixEndNdx = 0;
  while (
    prefixEndNdx + 1 < n
    && nums[prefixEndNdx] < nums[prefixEndNdx + 1]
  ) prefixEndNdx++;


  if (prefixEndNdx === n - 1) {
    return n * (n + 1) / 2;
  }

  let incremovableCnt = prefixEndNdx + 2;
  for (let suffixStartNdx = n - 1; suffixStartNdx > 0; suffixStartNdx--) {
    while (
      prefixEndNdx >= 0
      && nums[prefixEndNdx] >= nums[suffixStartNdx]
    ) prefixEndNdx--;

    incremovableCnt += prefixEndNdx + 2;

    if (nums[suffixStartNdx - 1] >= nums[suffixStartNdx]) break;
  }

  return incremovableCnt;
}
