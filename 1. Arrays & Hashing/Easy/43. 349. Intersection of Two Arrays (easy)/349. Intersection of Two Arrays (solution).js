/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  const nums1Set = new Set(nums1);

  const result = [];
  for (const num of nums2) {
    if (!nums1Set.has(num)) continue;

    result.push(num);
    nums1Set.delete(num);
  }

  return result;
}
