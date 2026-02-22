/**
 * @param {number[]} arr
 * @return {number}
 */
function countTriplets(arr) {
  const n = arr.length;

  let result = 0;
  for (let i = 0; i < n; i++) {
    let xorSum = arr[i];
    for (let j = i + 1; j < n; j++) {
      xorSum ^= arr[j];

      if (xorSum === 0) result += j - i;
    }
  }

  return result;
}
