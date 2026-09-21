/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  const num1ToFreq = new Int32Array(1001);
  for (const num of nums1) num1ToFreq[num]++;

  const intersection = [];
  for (const num of nums2) {
    if (num1ToFreq[num] === 0) continue;

    intersection.push(num);

    num1ToFreq[num]--;
  }

  return intersection;
}
