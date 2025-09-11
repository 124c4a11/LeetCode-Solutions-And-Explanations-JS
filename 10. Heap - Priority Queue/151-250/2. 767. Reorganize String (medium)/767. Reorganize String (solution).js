/**
 * @param {string} s
 * @return {string}
 */
function reorganizeString(s) {
  const n = s.length;

  const charFreq = new Int32Array(26);
  for (const char of s) {
    charFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let maxNdx = 0;
  for (let i = 1; i < 26; i++) {
    if (charFreq[i] > charFreq[maxNdx]) {
      maxNdx = i;
    }
  }

  const maxFreq = charFreq[maxNdx];
  if (maxFreq > Math.ceil(n / 2)) {
    return '';
  }

  const maxChar = String.fromCharCode(maxNdx + 'a'.charCodeAt(0));

  const result = new Array(n);
  let i = 0;
  while (charFreq[maxNdx]) {
    result[i] = maxChar;
    charFreq[maxNdx]--;
    i += 2;
  }

  for (let j = 0; j < 26; j++) {
    while (charFreq[j]) {
      if (i >= n) i = 1;

      result[i] = String.fromCharCode(j + 'a'.charCodeAt(0));
      charFreq[j]--;
      i += 2;
    }
  }

  return result.join('');
}
