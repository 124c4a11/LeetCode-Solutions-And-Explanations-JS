/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
function largestLocal(grid) {
  const n = grid.length;

  const resultMatrix = Array.from(
    { length: n - 2 },
    () => new Array(n - 2)
  );
  for (let resultR = 0; resultR < n - 2; resultR++) {
    for (let resultC = 0; resultC < n - 2; resultC++) {
      let max = 0;
      for (let r = resultR; r < resultR + 3; r++) {
        for (let c = resultC; c < resultC + 3; c++) {
          max = Math.max(max, grid[r][c]);
        }
      }

      resultMatrix[resultR][resultC] = max;
    }
  }

  return resultMatrix;
}
