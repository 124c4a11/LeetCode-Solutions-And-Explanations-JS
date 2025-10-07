/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
function canReach(s, minJump, maxJump) {
  const n = s.length;

  const q = new Queue();
  q.enqueue(0);

  let farthest = 0;
  while (!q.isEmpty()) {
    const i = q.dequeue();
    const start = Math.max(
      i + minJump,
      farthest + 1
    );

    for (
      let j = start;
      j < Math.min(i + maxJump + 1, n);
      j++
    ) {
      if (s[j] === '1') continue;
      if (j === n - 1) return true;

      q.enqueue(j);
    }

    farthest = i + maxJump;
  }

  return false;
}
