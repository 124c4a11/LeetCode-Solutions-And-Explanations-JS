/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
function construct(grid) {
  const falseLeaf = new Node(false, true);
  const trueLeaf = new Node(true, true);

  function dfs(n = grid.length, r = 0, c = 0) {
    if (n === 1) {
      return grid[r][c] === 1 ? trueLeaf : falseLeaf;
    }

    n = Math.floor(n / 2);
    const topLeft = dfs(n, r, c);
    const topRight = dfs(n, r, c + n);
    const bottomLeft = dfs(n, r + n, c);
    const bottomRight = dfs(n, r + n, c + n);

    if (
      topLeft.isLeaf
      && topRight.isLeaf
      && bottomLeft.isLeaf
      && bottomRight.isLeaf
      && topLeft.val === topRight.val
      && topLeft.val === bottomLeft.val
      && topLeft.val === bottomRight.val
    ) return topLeft;


    return new Node(
      false,
      false,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    );
  };

  return dfs();
}
