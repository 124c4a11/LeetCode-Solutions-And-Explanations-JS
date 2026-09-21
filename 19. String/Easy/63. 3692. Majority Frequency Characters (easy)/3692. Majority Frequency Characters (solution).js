/**
 * @param {string} s
 * @return {string}
 */
function majorityFrequencyGroup(s) {
  const charToFreq = new Int32Array(26);
  for (const char of s) {
    charToFreq[char.codePointAt(0) - 97]++;
  }

  const freqToChars = new Array(101);
  let maxFreqLength = 0;
  for (let charNdx = 0; charNdx < 26; charNdx++) {
    const freq = charToFreq[charNdx];

    if (freq === 0) continue;

    if (!freqToChars[freq]) freqToChars[freq] = [];

    const char = String.fromCodePoint(charNdx + 97);
    const currFreqLength = freqToChars[freq].push(char);

    if (currFreqLength <= maxFreqLength) continue;

    maxFreqLength = currFreqLength;
  }

  for (let freq = 100; freq >= 1; freq--) {
    const chars = freqToChars[freq];

    if (
      !chars
      || chars.length < maxFreqLength
    ) continue;

    return chars.join('');
  }

  return '';
}
