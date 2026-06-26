/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumOperations(nums) {
  const numToSeen = new Array(101);
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];

    if (numToSeen[num]) return Math.floor(i / 3) + 1;

    numToSeen[num] = true;
  }

  return 0;
}
