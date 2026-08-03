/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function missingMultiple(nums, k) {
  const numToSeen = new Array(101);
  for (const num of nums) numToSeen[num] = true;

  for (let num = 1; ; num++) {
    const x = num * k;

    if (!numToSeen[x]) return x;
  }
}
