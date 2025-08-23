// Doubly Linked List
class ListNode {
    /**
     * @param {number} val
     * @param {ListNode} next
     * @param {ListNode} prev
     */
    constructor(val, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.space = k;
        this.left = new ListNode(0);
        this.right = new ListNode(0, null, this.left);
        this.left.next = this.right;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.isFull()) return false;

        const curr = new ListNode(
            value,
            this.right,
            this.right.prev
        );

        this.right.prev.next = curr;
        this.right.prev = curr;
        this.space--;

        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.isEmpty()) return false;

        this.left.next = this.left.next.next;
        this.left.next.prev = this.left;
        this.space++;

        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        return this.isEmpty() ? -1 : this.left.next.val;
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.isEmpty() ? -1 : this.right.prev.val;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.left.next === this.right;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.space === 0;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
