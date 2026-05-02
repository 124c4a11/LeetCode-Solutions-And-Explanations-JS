/**
 * @param {number} n
 * @return {number}
 */
function minimumFlips(n) {
  const s = n.toString(2);

  let flipsCnt = 0;
  for (let l = 0, r = s.length - 1; l < r; l++, r--)
  {
    if (s[l] !== s[r]) flipsCnt += 2;
  }

  return flipsCnt;
}
