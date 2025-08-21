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
 * @return {void}
 */
function reorderList(head) {
  if (!head?.next) return null;

  let slow = head;
  let fast = head.next;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  let prev = (slow.next = null);
  while (second) {
    const tmp = second.next;

    second.next = prev;
    prev = second
    second = tmp;
  }

  let first = head;
  second = prev;
  while (second) {
    const tmp1 = first.next;
    const tmp2 = second.next;

    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
}
