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
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);

  let r = head;
  while (n) {
    r = r.next;
    n--;
  }
  
  let l = dummy;
  while (r) {
    l = l.next;
    r = r.next;
  }

  l.next = l.next.next;

  return dummy.next;
}
