/**
 * @param {number[]} arr
 * @return {number}
 */
function sumOddLengthSubarrays(arr) {
  const n = arr.length;

  let result = 0;
  for (let i = 0; i < n; ++i) {
    const totalSubarrayCnt = (i + 1) * (n - i);
    const oddSubarrayCnt = Math.ceil(totalSubarrayCnt / 2);

    result += arr[i] * oddSubarrayCnt;
  }

  return result;
}
