/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
function openLock(deadends, target) {
  if (target === '0000') return 0;

  const visited = new Set(deadends);
  if (visited.has('0000')) return -1;

  let begin = new Set(['0000']);
  let end = new Set([target]);
  let steps = 0;
  while (begin.size && end.size) {
    if (begin.size > end.size) {
      [begin, end] = [end, begin];
    }

    steps++;

    const tmp = new Set();
    for (const lock of begin) {
      for (let i = 0; i < 4; i++) {
        for (const j of [-1, 1]) {
          const digit = (Number(lock[i]) + j + 10) % 10;
          const nextLock =
            lock.slice(0, i)
            + digit
            + lock.slice(i + 1);

          if (end.has(nextLock)) return steps;
          if (visited.has(nextLock)) continue;

          visited.add(nextLock);
          tmp.add(nextLock);
        }
      }
    }

    begin = tmp;
  }

  return -1;
}
