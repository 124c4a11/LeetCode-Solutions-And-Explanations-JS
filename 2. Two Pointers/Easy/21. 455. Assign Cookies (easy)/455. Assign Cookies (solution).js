/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  const n = g.length;
  const m = s.length;

  let i = 0;
  let j = 0;
  while (i < n) {
    while (
      j < m
      && g[i] > s[j]
    ) j++;

    if (j == m) return i;

    i++;
    j++;
  }

  return i;
}
