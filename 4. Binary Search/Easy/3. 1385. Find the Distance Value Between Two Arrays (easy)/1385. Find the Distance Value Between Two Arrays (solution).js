/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
function findTheDistanceValue(arr1, arr2, d) {
  arr2.sort((a, b) => a - b);

  let cnt = 0;
  for (const num of arr1) {
    const i = binarySearchLowerBound(arr2, num - d);

    if (
      i === arr2.length
      || arr2[i] > num + d
    ) cnt++;
  }

  return cnt;
}

function binarySearchLowerBound(arr, target) {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    const midd = Math.floor(l + (r - l) / 2);

    if (arr[midd] >= target) r = midd;
    else l = midd + 1
  }

  return l;
}
