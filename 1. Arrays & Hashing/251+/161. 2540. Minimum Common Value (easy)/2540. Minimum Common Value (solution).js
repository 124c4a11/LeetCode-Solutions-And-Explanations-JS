/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function getCommon(nums1, nums2) {
  let nums1Ndx = 0;
  let nums2Ndx = 0;
  while (
    nums1Ndx < nums1.length
    && nums2Ndx < nums2.length
  ) {
    const num1 = nums1[nums1Ndx];
    const num2 = nums2[nums2Ndx];

    if (num1 === num2) return num1;

    if (num1 < num2) nums1Ndx++;
    else nums2Ndx++;
  }

  return -1;
}
