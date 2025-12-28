class MovingAverage {
  /**
   * @param {number} size
   */
  constructor(size) {
    this.size = size;
    this.q = new Int32Array(this.size);
    this.lastNdx = 0;
    this.windowSum = 0;
    this.seenCnt = 0;
  }

  /**
   * @param {number} val
   * @return {number}
   */
  next(val) {
    this.seenCnt++;

    const nextOverwriteNdx = (this.lastNdx + 1) % this.size;
    this.windowSum = this.windowSum - this.q[nextOverwriteNdx] + val;

    this.lastNdx = nextOverwriteNdx;
    this.q[this.lastNdx] = val;

    return this.windowSum / Math.min(this.size, this.seenCnt);
  }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size);
 * var param_1 = obj.next(val);
 */
