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
  const stack = [];
  let curr = root;
  while (curr || stack.length) {
    if (curr) {
      result.push(curr.val);
      stack.push(curr);
      curr = curr.right;

      continue;
    }

    curr = stack.pop();
    curr = curr.left;
  }

  return result.reverse();
}
