/**
 * @param {string} s
 * @return {string}
 */
function findValidPair(s) {
  const numToFreq = new Int32Array(101);
  for (const num of s) numToFreq[num]++;

  for (let i = 1; i < s.length; i++) {
    const prevNum = Number(s[i - 1]);
    const currNum = Number(s[i]);

    if (
      prevNum !== currNum
      && numToFreq[prevNum] === prevNum
      && numToFreq[currNum] === currNum
    ) return `${prevNum}${currNum}`;
  }

  return '';
}
