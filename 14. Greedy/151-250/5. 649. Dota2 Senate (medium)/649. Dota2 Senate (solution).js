/**
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory(senate) {
  const s = senate.split('');
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      if (cnt < 0) s.push('D');
      cnt++;
    } else {
      if (cnt > 0) s.push('R');
      cnt--;
    }
  }

  return cnt > 0 ? 'Radiant' : 'Dire';
}
