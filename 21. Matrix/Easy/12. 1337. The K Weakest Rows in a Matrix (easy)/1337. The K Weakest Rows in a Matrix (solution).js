/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
function kWeakestRows(mat, k) {
  const ROWS = mat.length;
  const COLS = mat[0].length;

  const soldiersCntToIndices = Array.from({ length: COLS + 1 }, () => []);
  for (let r = 0; r < ROWS; r++) {
    const soldiersCnt = binarySearchFirstOccurrence(mat[r], 0);

    soldiersCntToIndices[soldiersCnt].push(r);
  }

  const result = new Array(k);
  let i = 0;
  for (const indices of soldiersCntToIndices)
  {
    for (const ndx of indices) {
      result[i++] = ndx;

      if (i === k) return result;
    }
  }

  return result;
}

function binarySearchFirstOccurrence(arr, target) {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    let midd = Math.floor(l + (r - l) / 2);

    if (arr[midd] === target) r = midd;
    else l = midd + 1;
  }

  return l;
}
