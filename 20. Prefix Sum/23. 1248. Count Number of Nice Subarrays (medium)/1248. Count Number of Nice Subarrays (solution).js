/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numberOfSubarrays(nums, k) {
  const n = nums.length;

  const prefixOddCnts = new Int32Array(n + 1);
  prefixOddCnts[0] = 1;
  let result = 0;
  let currOddCnt = 0;
  for (const num of nums) {
    currOddCnt += num & 1;

    if (currOddCnt >= k) {
      result += prefixOddCnts[currOddCnt - k];
    }

    prefixOddCnts[currOddCnt]++;
  }

  return result;
}
