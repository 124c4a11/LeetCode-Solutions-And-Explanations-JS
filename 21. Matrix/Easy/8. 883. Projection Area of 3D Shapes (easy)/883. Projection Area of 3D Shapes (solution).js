/**
 * @param {number[][]} grid
 * @return {number}
 */
function projectionArea(grid) {
  const n = grid.length;

  let xy = 0;
  let yz = 0;
  let zx = 0;
  for (let i = 0; i < n; i++) {
    let maxHeightInRow = 0;
    let maxHeightInCol = 0;
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) xy++;

      maxHeightInRow = Math.max(maxHeightInRow, grid[i][j]);
      maxHeightInCol = Math.max(maxHeightInCol, grid[j][i]);
    }

    yz += maxHeightInRow;
    zx += maxHeightInCol;
  }

  return xy + yz + zx;
}
