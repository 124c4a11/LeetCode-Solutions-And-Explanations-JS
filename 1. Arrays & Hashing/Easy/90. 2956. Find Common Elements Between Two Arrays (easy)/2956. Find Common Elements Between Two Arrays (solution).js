/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function findIntersectionValues(nums1, nums2) {
  const num1ToSeen = new Int32Array(101);
  for (const num of nums1) num1ToSeen[num] = 1;

  const num2ToSeen = new Int32Array(101);
  for (const num of nums2) num2ToSeen[num] = 1;

  const result = new Int32Array(2);
  for (const num of nums1) {
    result[0] += num2ToSeen[num];
  }
  for (const num of nums2) {
    result[1] += num1ToSeen[num];
  }

  return result;
}
