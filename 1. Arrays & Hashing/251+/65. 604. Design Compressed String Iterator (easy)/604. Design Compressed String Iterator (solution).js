class StringIterator {
  /**
   * @param {string} compressedString
   */
  constructor(compressedString) {
    this.str = compressedString;
    this.n = this.str.length;
    this.i = 0;
    this.num = 0;
    this.char = ' ';
  }

  /**
   * @return {character}
   */
  next() {
    if (!this.hasNext()) return ' ';

    if (this.num === 0) {
      this.char = this.str[this.i++];

      while (
        this.i < this.n
        && !isNaN(this.str[this.i])
      ) {
        this.num = this.num * 10 + Number(this.str[this.i++]);
      }
    }

    this.num--;

    return this.char;
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.i !== this.n || this.num !== 0;
  }
}

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
