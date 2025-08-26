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
  const stack = [];
  let curr = root;
  while (curr || stack.length) {
    if (curr) {
      result.push(curr.val);
      stack.push(curr.right);
      curr = curr.left;
      continue;
    }

    curr = stack.pop();
  }

  return result;
}
