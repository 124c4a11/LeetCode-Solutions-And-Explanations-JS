/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
function numberOfPairs(nums1, nums2, k) {
  let validPairsCnt = 0;
  for (const num1 of nums1) {
    for (const num2 of nums2) {
      if (num1 % (num2 * k) === 0) validPairsCnt++;
    }
  }

  return validPairsCnt;
}
