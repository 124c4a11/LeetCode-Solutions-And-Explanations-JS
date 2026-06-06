/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
function findFinalValue(nums, original) {
  const numToSeen = new Array(1001);
  for (const num of nums) numToSeen[num] = true;

  while (numToSeen[original]) original *= 2;

  return original;
}
