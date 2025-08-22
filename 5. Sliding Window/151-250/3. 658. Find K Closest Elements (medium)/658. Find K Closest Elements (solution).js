/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements(arr, k, x) {
  let l = 0;
  let r = arr.length - k;
  while (l < r) {
    const midd = Math.floor(l + (r - l) / 2);

    if (x - arr[midd] > arr[midd + k] - x) {
      l = midd + 1;
    } else {
      r = midd;
    }
  }

  return arr.slice(l, l + k);
}
