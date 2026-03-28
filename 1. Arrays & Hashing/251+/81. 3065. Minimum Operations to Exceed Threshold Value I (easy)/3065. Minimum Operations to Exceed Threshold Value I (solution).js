/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
  let operationsCnt = 0;
  for (const num of nums) {
    if (num < k) operationsCnt++;
  }

  return operationsCnt;
}
