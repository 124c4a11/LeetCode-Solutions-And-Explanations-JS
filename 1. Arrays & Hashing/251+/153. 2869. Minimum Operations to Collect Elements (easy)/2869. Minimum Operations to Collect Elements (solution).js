/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
  let operationsCnt = 0;
  let seenCnt = 0;
  const numToSeen = new Array(k + 1);
  for (let i = nums.length - 1; i >= 0; i--)
  {
    const num = nums[i];

    operationsCnt++;

    if (
      num > k
      || numToSeen[num]
    ) continue;

    numToSeen[num] = true;
    seenCnt++;

    if (seenCnt === k) return operationsCnt;
  }
}
