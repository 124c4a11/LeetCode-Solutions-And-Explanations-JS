/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
function buddyStrings(s, goal) {
  if (s.length !== goal.length) return false;

  let maxFreq = -Infinity;
  let diffIndices = [];
  const charToFreq = new Int32Array(26);
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffIndices.push(i);

      if (diffIndices.length > 2) return false;
    } else {
      const freq = ++charToFreq[s.codePointAt(i) - 97];

      if (freq > maxFreq) maxFreq = freq;
    }
  }

  if (diffIndices.length === 0) return maxFreq > 1;
  if (diffIndices.length === 1) return false;

  const [i, j] = diffIndices;

  return s[i] === goal[j] && s[j] === goal[i];
}
