/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
function minimumRecolors(blocks, k) {
  let minRecolors = k;
  let whiteCnt = 0;
  let l = 0;
  for (let r = 0; r < blocks.length; r++) {
    if (blocks[r] === 'W') whiteCnt++;

    if (r - l + 1 === k) {
      minRecolors = Math.min(minRecolors, whiteCnt);

      if (blocks[l] === 'W') whiteCnt--;

      l++;
    }
  }

  return minRecolors;
}
