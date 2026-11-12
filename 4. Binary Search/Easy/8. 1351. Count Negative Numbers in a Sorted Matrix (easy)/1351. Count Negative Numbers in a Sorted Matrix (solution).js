/**
 * @param {number[][]} grid
 * @return {number}
 */
function countNegatives(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  let negativeCnt = 0;
  for (let r = 0; r < ROWS; r++) {
    const c = binarySearchFirstLessOrEqual(grid[r], -1);

    negativeCnt += COLS - c;
  }

  return negativeCnt;
}

function binarySearchFirstLessOrEqual(arr, target) {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    const midd = Math.floor(l + (r - l) / 2);

    if (arr[midd] <= target) r = midd;
    else l = midd + 1;
  }

  return l;
}
