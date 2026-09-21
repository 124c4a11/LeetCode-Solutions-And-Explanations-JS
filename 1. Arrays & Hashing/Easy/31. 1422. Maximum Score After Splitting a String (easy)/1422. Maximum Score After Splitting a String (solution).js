/**
 * @param {string} s
 * @return {number}
 */
function maxScore(s) {
  let zeroCnt = 0;
  let oneCnt = 0;
  if (s[0] === '0') zeroCnt++;
  else oneCnt++;


  let maxDiff = -Infinity;
  for (let i = 1; i < s.length; i++) {
    maxDiff = Math.max(maxDiff, zeroCnt - oneCnt);

    if (s[i] === '0') zeroCnt++;
    else oneCnt++;
  }

  return maxDiff + oneCnt;
}
