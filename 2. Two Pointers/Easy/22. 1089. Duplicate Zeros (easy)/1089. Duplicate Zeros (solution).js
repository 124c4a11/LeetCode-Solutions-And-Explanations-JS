/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
  const n = arr.length;

  let sourceNdx = -1;
  let virtualLength = 0;
  while (virtualLength < n) {
    sourceNdx++;
    virtualLength += (arr[sourceNdx] === 0) ? 2 : 1;
  }

  let destinationNdx = n - 1;
  if (virtualLength === n + 1) {
    arr[destinationNdx] = 0;
    sourceNdx--;
    destinationNdx--;
  }

  while (destinationNdx >= 0) {
    arr[destinationNdx] = arr[sourceNdx];

    if (arr[sourceNdx] === 0) {
      destinationNdx--;
      arr[destinationNdx] = 0;
    }

    sourceNdx--;
    destinationNdx--;
  }
}
