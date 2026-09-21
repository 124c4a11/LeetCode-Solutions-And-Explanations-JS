/**
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
  const n = nums.length;

  let operationCnt = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) continue;

    if (i + 2 >= n) return -1;

    nums[i + 1] ^= 1;
    nums[i + 2] ^= 1;

    operationCnt++;
  }

  return operationCnt;
}
