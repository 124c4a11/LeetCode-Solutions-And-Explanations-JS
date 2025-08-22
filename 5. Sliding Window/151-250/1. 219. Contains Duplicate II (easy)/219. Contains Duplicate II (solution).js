/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
  const numSet = new Set();
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (r - l > k) {
      numSet.delete(nums[l]);
      l++;
    }

    if (numSet.has(nums[r])) return true;

    numSet.add(nums[r]);
  }

  return false;
}
