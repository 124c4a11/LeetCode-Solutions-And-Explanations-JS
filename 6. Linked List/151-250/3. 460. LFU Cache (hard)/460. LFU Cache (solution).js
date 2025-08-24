class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.freq = 1;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = new Node(0);
    this.tail = new Node(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  add(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
    this.size++;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
  }

  removeTail() {
    const prev = this.tail.prev;

    this.remove(prev);

    return prev;
  }
}

class LFUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.freqMap = new Map();
    this.size = 0;
    this.minFreq = 0;
  }

  updateFreq(node) {
    const freqList = this.freqMap.get(node.freq);

    freqList.remove(node);

    if (
      this.minFreq === node.freq 
      && !freqList.size
    ) this.minFreq++;

    node.freq++;

    if (!this.freqMap.has(node.freq)) {
      this.freqMap.set(node.freq, new DoubleLinkedList());
    }

    this.freqMap.get(node.freq).add(node);
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key);

    this.updateFreq(node);

    return node.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   */
  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);

      node.value = value;
      this.updateFreq(node);

      return;
    }

    if (this.size === this.capacity) {
      const freqList = this.freqMap.get(this.minFreq);
      const lfu = freqList.removeTail();

      this.cache.delete(lfu.key);
      this.size--;
    }

    const newNode = new Node(key, value);

    if (!this.freqMap.has(newNode.freq)) {
      this.freqMap.set(newNode.freq, new DoubleLinkedList());
    }
    
    this.freqMap.get(newNode.freq).add(newNode);
    this.cache.set(key, newNode);
    this.minFreq = newNode.freq;
    this.size++;
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */