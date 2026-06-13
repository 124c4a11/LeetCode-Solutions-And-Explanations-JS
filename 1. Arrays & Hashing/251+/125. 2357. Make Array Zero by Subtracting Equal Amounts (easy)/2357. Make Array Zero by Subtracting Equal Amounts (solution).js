/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumOperations(nums) {
  let operationsCnt = 0;
  const numToSeen = new Array(101);
  for (const num of nums) {
    if (num === 0 || numToSeen[num]) continue;

    operationsCnt++;
    numToSeen[num] = true;
  }

  return operationsCnt;
}
