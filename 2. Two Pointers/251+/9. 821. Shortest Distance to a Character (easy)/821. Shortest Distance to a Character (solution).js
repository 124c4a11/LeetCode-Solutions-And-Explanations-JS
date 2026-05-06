/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
function shortestToChar(s, c) {
  const n = s.length;

  const distances = new Array(n).fill(Infinity);
  let prevCharPos = -Infinity;
  for (let i = 0; i < n; i++) {
    if (s[i] === c)  prevCharPos = i;

    distances[i] = i - prevCharPos;
  }

  let nextCharPos = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) nextCharPos = i;

    distances[i] = Math.min(distances[i], nextCharPos - i);
  }

  return distances;
}
