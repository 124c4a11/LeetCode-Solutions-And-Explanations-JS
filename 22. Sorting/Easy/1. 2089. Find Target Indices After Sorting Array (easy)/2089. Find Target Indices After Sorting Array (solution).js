/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function targetIndices(nums, target) {
  let lessCnt = 0;
  let equalCnt = 0;
  for (const num of nums) {
    if (num < target) lessCnt++;
    else if (num == target) equalCnt++;
  }

  const targetIndices = new Array(equalCnt);
  let i = 0;
  for (let j = lessCnt; j < lessCnt + equalCnt; j++) {
    targetIndices[i++] = j;
  }

  return targetIndices;
}
