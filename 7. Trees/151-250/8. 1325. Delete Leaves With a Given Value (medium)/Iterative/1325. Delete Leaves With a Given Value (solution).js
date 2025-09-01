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
 * @param {number} target
 * @return {TreeNode}
 */
function removeLeafNodes(root, target) {
  if (!root) return null;

  const stack = [];
  let visited = null;
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.at(-1)
    if (
      curr.right
      && curr.right !== visited
    ) {
      curr = curr.right;
      continue;
    }

    stack.pop();
    if (
      !curr.left
      && !curr.right
      && curr.val === target
    ) {
      if (!stack.length) return null;

      const parent = stack.at(-1)
      if (parent.left === curr) {
        parent.left = null;
      } else if (parent.right === curr) {
        parent.right = null;
      }
    } else {
      visited = curr;
    }

    curr = null;
  }

  return root;
}
