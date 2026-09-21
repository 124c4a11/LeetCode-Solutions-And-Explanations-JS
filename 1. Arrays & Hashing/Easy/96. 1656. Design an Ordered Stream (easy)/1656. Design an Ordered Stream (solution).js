/**
 * @param {number} n
 */
class OrderedStream {
  constructor(n) {
    this.data = new Array(n + 1);
    this.i = 1;
  }

  /**
   * @param {number} idKey
   * @param {string} value
   * @return {string[]}
   */
  insert(idKey, value) {
    this.data[idKey] = value;

    const largestChunk = [];
    while (this.data[this.i]) {
      largestChunk.push(this.data[this.i]);
      this.i++;
    }

    return largestChunk;
  }
}


/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
