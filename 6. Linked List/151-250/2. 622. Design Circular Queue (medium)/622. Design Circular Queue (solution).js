// Doubly Linked List
class ListNode {
    /**
     * @param {number} val
     * @param {ListNode} next
     * @param {ListNode} prev
     */
    constructor(val = 0, next = null, prev = null) {
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
        this.head = new ListNode();
        this.tail = new ListNode(_, _, this.head);
        this.head.next = this.tail;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.isFull()) return false;

        const curr = new ListNode(
            value,
            this.tail,
            this.tail.prev
        );

        this.tail.prev.next = curr;
        this.tail.prev = curr;
        this.space--;

        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.isEmpty()) return false;

        this.head.next = this.head.next.next;
        this.head.next.prev = this.head;
        this.space++;

        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        return this.isEmpty() ? -1 : this.head.next.val;
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.isEmpty() ? -1 : this.tail.prev.val;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head.next === this.tail;
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
