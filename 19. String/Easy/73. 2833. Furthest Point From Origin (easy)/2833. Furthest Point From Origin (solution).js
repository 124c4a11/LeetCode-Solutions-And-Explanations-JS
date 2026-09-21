/**
 * @param {string} moves
 * @return {number}
 */
function furthestDistanceFromOrigin(moves) {
  let lCnt = 0;
  let rCnt = 0;
  let _Cnt = 0;
  for (const char of moves) {
    if (char === 'L') lCnt++;
    else if (char === 'R') rCnt++;
    else if (char === '_') _Cnt++;
  }

  return Math.abs(lCnt - rCnt) + _Cnt;
}
