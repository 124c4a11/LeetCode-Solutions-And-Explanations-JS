/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  const result = [];

  !function dfs(node = root) {
    if (!node) return;

    dfs(node.left);

    result.push(node.val);

    dfs(node.right);
  }();

  return result;
}
