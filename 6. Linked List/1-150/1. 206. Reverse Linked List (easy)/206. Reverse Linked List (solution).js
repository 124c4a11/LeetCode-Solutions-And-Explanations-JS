/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const tmp = curr.next;

    curr.next = prev;
    prev = curr;
    curr = tmp;
  }

  return prev;
}
