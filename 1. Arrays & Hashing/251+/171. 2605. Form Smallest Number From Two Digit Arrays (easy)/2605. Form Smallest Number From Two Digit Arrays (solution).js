/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minNumber(nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;

  const num1ToSeen = new Array(10);
  const num2ToSeen = new Array(10);
  for (let i = 0; i < Math.max(n, m); i++) {
    if (i < n) num1ToSeen[nums1[i]] = true;
    if (i < m) num2ToSeen[nums2[i]] = true;
  }

  let minNum1 = Infinity;
  let minNum2 = Infinity;
  for (let num = 1; num < 10; num++) {
    if (num1ToSeen[num] && num2ToSeen[num]) return num;

    if (minNum1 === Infinity && num1ToSeen[num]) minNum1 = num;
    if (minNum2 === Infinity && num2ToSeen[num]) minNum2 = num;
  }

  return minNum1 < minNum2
    ? minNum1 * 10 + minNum2
    : minNum2 * 10 + minNum1;
}
