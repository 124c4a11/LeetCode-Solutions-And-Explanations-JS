/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findKthPositive(arr, k) {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    const missingBeforeMid = arr[mid] - mid - 1;

    if (missingBeforeMid >= k)  r = mid;
    else l = mid + 1;
  }

  return l + k;
}
