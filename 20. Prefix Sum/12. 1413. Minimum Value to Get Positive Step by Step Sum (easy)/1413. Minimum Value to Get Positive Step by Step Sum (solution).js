/**
 * @param {number[]} nums
 * @return {number}
 */
function minStartValue(nums) {
  let currSum = 0;
  let minSum = Infinity;
  for (const num of nums) {
    currSum += num;
    minSum = Math.min(minSum, currSum);
  }

  return Math.max(1, 1 - minSum);
}
