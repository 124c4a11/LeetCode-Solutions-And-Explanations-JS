/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
function arithmeticTriplets(nums, diff) {
  const numToSeen = new Array(301);
  for (const num of nums) numToSeen[num] = true;

  let result = 0;
  for (const num of nums) {
    if (
      numToSeen[num + diff]
      && numToSeen[num + diff * 2]
    ) result++;
  }

  return result;
}
