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
function preorderTraversal(root) {
  const result = [];

  !function dfs(node = root) {
    if (!node) return;

    result.push(node.val);

    dfs(node.left);
    dfs(node.right);
  }();

  return result;
}
