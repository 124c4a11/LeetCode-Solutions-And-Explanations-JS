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
function insertGreatestCommonDivisors(head) {
  if (!head) return null;

  function gcd(a, b) {
    while (b > 0) {
      [a, b] = [b, a % b];
    }

    return a;
  };

  let curr = head;
  while (curr.next) {
    const n1 = curr.val;
    const n2 = curr.next.val;
    const gcdValue = gcd(n1, n2);
    const newNode = new ListNode(gcdValue, curr.next);

    curr.next = newNode;
    curr = newNode.next;
  }

  return head;
}
