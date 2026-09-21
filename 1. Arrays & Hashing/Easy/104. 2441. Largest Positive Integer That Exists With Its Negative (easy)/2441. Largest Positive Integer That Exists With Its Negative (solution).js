/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxK(nums) {
  const numsSet = new Set(nums);

  let max = -1;
  for (const num of nums) {
    if (!numsSet.has(-num)) continue;

    max = Math.max(max, num);
  }

  return max;
}
