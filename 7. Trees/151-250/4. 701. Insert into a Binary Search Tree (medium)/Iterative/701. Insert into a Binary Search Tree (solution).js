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
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoBST(root, val) {
  const node = new TreeNode(val)

  if (!root) return node;


  let curr = root;
  while (true) {
    if (curr.val > val) {
      if (!curr.left) {
        curr.left = node;
        return root;
      }

      curr = curr.left;
    } else {
      if (!curr.right) {
        curr.right = node;
        return root;
      }

      curr = curr.right;
    }
  }
}
