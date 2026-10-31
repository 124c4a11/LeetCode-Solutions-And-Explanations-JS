/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function countRotations(s, k) {
  const n = s.length;

  let score = 0;
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) score++;
  }

  let cyclicRotationsCnt = 0;
  for (let i = 0; i < n; i++) {
    if (score === k) cyclicRotationsCnt++;

    if (s[i] === s[(i + 1) % n]) score--;
    if (s[(i + n - 1) % n] === s[i]) score++;
  }

  return cyclicRotationsCnt;
}
