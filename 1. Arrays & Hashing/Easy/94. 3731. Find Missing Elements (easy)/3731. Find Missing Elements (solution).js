/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findMissingElements(nums) {
  const numToSeen = new Int32Array(101);
  let min = 100;
  let max = 1;
  for (const num of nums) {
    numToSeen[num] = 1;
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  const missingNums = [];
  for (let num = min + 1; num < max; num++) {
    if (!numToSeen[num]) missingNums.push(num);
  }

  return missingNums;
}
