/**
 * @param {number[][]} nums
 * @return {number}
 */
function numberOfPoints(nums) {
  const diffArr = new Int32Array(102);
  for (const interval of nums) {
    diffArr[interval[0]]++;
    diffArr[interval[1] + 1]--;
  }

  let result = 0;
  let prefixSum = 0;
  for (const diff of diffArr) {
    prefixSum += diff;
    if (prefixSum > 0) result++;
  }

  return result;
}
