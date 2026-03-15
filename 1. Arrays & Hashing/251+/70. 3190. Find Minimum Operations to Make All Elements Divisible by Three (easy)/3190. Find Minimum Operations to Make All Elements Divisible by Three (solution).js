/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumOperations(nums) {
  let operationsCnt = 0;
  for (const num of nums) {
    const remainder = num % 3;

    if (remainder === 0) continue;

    operationsCnt += Math.min(remainder, 3 - remainder);
  }

  return operationsCnt;
}
