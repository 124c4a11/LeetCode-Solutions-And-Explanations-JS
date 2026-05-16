/**
 * @param {number[]} nums
 * @return {number}
 */
function repeatedNTimes(nums) {
  const numSet = new Set();
  for (const num of nums) {
    if (numSet.has(num)) return num;

    numSet.add(num);
  }
}
