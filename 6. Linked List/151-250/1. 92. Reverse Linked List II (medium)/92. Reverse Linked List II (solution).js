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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
  const dummy = new ListNode(0, head);

  let leftPrev = dummy;
  let curr = head;
  for (let i = 0; i < left - 1; i++) {
    leftPrev = curr;
    curr = curr.next;
  }

  let prev = null;
  for (let i = 0; i < right - left + 1; i++) {
    const tmp = curr.next;

    curr.next = prev;
    prev = curr;
    curr = tmp;
  }

  leftPrev.next.next = curr;
  leftPrev.next = prev;

  return dummy.next;
}
