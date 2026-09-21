/**
 * @param {number[][]} grid
 * @return {number[]}
 */
function findMissingAndRepeatedValues(grid) {
  const n = grid.length;

  const set = new Set();
  let repeated = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const num = grid[r][c];

      if (set.has(num)) repeated = num; 

      set.add(num);
    }
  }

  let missing = 0;
  for (let num = 1; num <= n * n; num++) {
    if (set.has(num)) continue;

    missing = num;
    break;
  }

  return [repeated, missing]
};
