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
function postorderTraversal(root) {
  const result = [];

  !function dfs(node = root) {
    if (!node) return;

    dfs(node.left);
    dfs(node.right);

    result.push(node.val);
  }();

  return result;
}
