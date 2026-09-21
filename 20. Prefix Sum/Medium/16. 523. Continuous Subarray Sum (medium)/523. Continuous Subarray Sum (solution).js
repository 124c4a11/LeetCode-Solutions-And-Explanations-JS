/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function checkSubarraySum(nums, k) {
  const prefixRemainderToNdx = new Map([[0, -1]]);
  let prefixRemainder = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixRemainder = (prefixRemainder + nums[i]) % k;

    if (!prefixRemainderToNdx.has(prefixRemainder)) {
      prefixRemainderToNdx.set(prefixRemainder, i);
    } else if (i - prefixRemainderToNdx.get(prefixRemainder) > 1) {
      return true;
    }
  }

  return false;
}
