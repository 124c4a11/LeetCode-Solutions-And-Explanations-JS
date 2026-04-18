/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function addedInteger(nums1, nums2) {
  let nums1Min = Infinity;
  let nums2Min = Infinity;
  for (let i = 0; i < nums1.length; i++) {
    nums1Min = Math.min(nums1Min, nums1[i]);
    nums2Min = Math.min(nums2Min, nums2[i]);
  }

  return nums2Min - nums1Min;
}
