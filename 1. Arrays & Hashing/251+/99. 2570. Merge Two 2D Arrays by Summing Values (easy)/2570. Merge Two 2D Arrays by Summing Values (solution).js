/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
function mergeArrays(nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;

  const result = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    const pair1 = nums1[i];
    const pair2 = nums2[j];

    if (pair1[0] === pair2[0]) {
      result.push([pair1[0], pair1[1] + pair2[1]]);
      i++;
      j++;
    } else if (pair1[0] < pair2[0]) {
      result.push(pair1);
      i++;
    } else {
      result.push(pair2);
      j++;
    }
  }

  while (i < n) {
    result.push(nums1[i]);
    i++;
  }

  while (j < m) {
    result.push(nums2[j]);
    j++;
  }

  return result;
}
