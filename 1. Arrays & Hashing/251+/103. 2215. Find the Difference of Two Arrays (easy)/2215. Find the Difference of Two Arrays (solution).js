/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2) {
  const nums1Set = new Set(nums1);
  for (const num of nums2) nums1Set.delete(num);

  const nums2Set = new Set(nums2);
  for (const num of nums1) nums2Set.delete(num);

  return [[...nums1Set], [...nums2Set]];
}
