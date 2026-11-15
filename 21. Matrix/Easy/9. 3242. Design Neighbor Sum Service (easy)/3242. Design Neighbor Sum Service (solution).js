/**
 * @param {number[][]} grid
 */
class NeighborSum {
  constructor(grid) {
    this.n = grid.length;
    this.grid = grid;

    this.valueToPos = new Map();
    for (let r = 0; r < this.n; r++) {
      for (let c = 0; c < this.n; c++) {
        this.valueToPos.set(grid[r][c], [r, c]);
      }
    }
  }

  /**
   * @param {number} value
   * @return {number}
   */
  adjacentSum(value) {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const [r, c] = this.valueToPos.get(value);

    let neighborsCnt = 0;
    for (const direction of directions) {
      const dr = direction[0];
      const dc = direction[1];
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0
        && nr < this.n
        && nc >= 0
        && nc < this.n
      ) neighborsCnt += this.grid[nr][nc];
    }

    return neighborsCnt;
  }

  /**
   * @param {number} value
   * @return {number}
   */
  diagonalSum(value) {
    const directions = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
    const [r, c] = this.valueToPos.get(value);

    let diagonalNeighborsCnt = 0;
    for (const direction of directions) {
      const dr = direction[0];
      const dc = direction[1];
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0
        && nr < this.n
        && nc >= 0
        && nc < this.n
      ) diagonalNeighborsCnt += this.grid[nr][nc];
    }

    return diagonalNeighborsCnt;
  }
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */
