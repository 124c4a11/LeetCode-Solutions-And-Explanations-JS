/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function anagramMappings(nums1, nums2) {
  const num2ToNdx = new Int32Array(101);
  for (let i = 0; i < nums2.length; i++) {
    num2ToNdx[nums2[i]] = i;
  }

  const result = [];
  for (const num of nums1) {
    result.push(num2ToNdx[num]);
  }

  return result;
}
