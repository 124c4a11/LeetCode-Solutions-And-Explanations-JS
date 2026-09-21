/**
 * @param {string} s
 * @return {boolean}
 */
function halvesAreAlike(s) {
  const midpoint = s.length >> 1;
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  let vowelBalance = 0;
  for (let i = 0; i < midpoint; i++) {
    if (vowelSet.has(s[i])) vowelBalance++;
    if (vowelSet.has(s[midpoint + i])) vowelBalance--;
  }

  return vowelBalance === 0;
}
