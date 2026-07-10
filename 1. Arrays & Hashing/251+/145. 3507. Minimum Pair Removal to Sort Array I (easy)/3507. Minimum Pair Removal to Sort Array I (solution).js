/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumPairRemoval(nums) {
  let removalsCnt = 0;
  while (nums.length > 1) {
    let minSum = Infinity;
    let isAscending = true;
    let targetNdx = -1;
    for (let i = 0; i < nums.length - 1; i++) {
      const currSum = nums[i] + nums[i + 1];

      if (nums[i] > nums[i + 1]) {
        isAscending = false;
      }

      if (currSum < minSum) {
        minSum = currSum;
        targetNdx = i;
      }
    }

    if (isAscending) break;

    removalsCnt++;
    nums[targetNdx] = minSum;
    nums.splice(targetNdx + 1, 1);
  }

  return removalsCnt;
}
