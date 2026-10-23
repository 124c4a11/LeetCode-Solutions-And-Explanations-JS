/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumCount(nums) {
  const n = nums.length;

  function binarySearchLowerBound(target) {
    let l = 0;
    let r = n;
    while (l < r) {
      const midd = Math.floor(l + (r - l) / 2);

      if (nums[midd] >= target) r = midd;
      else l = midd + 1;
    }

    return l;
  }

  const negCnt = binarySearchLowerBound(0);
  const posCnt = n - binarySearchLowerBound(1);

  return Math.max(negCnt, posCnt);
}
