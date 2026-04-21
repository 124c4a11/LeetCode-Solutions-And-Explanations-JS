/**
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
  let operationsCnt = 0;
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (max >= nums[i]) {
      operationsCnt += max + 1 - nums[i];
      max = max + 1;
    } else {
      max = nums[i];
    }
  }

  return operationsCnt;
}
