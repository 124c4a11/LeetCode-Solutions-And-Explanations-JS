/**
 * @param {string} moves
 * @return {boolean}
 */
function judgeCircle(moves) {
  let y = 0;
  let x = 0;
  for (const move of moves) {
    if (move === 'U') y++;
    else if (move === 'D') y--;
    else if (move === 'R') x++;
    else if (move === 'L') x--;
  }

  return y === 0 && x === 0;
}
