/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
function stringShift(s, shift) {
  const n = s.length;

  let netLeftShift = 0;
  for (const move of shift) {
    if (move[0]) move[1] *= -1

    netLeftShift += move[1];
  }

  netLeftShift = ((netLeftShift % n) + n) % n;
  s = s.slice(netLeftShift) + s.slice(0, netLeftShift);

  return s;
}
