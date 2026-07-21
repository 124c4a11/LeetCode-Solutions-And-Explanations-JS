/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
function shortestCompletingWord(licensePlate, words) {
  const licenseCharToFreq = new Int32Array(26);
  for (const char of licensePlate) {
    const charNdx = char.toLowerCase().codePointAt(0) - 97;

    if (charNdx < 0 || charNdx > 25) continue;

    licenseCharToFreq[charNdx]++;
  }

  let shortestCompletingWordNdx = 0;
  let minLength = Infinity;
  outer: for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordLength = word.length;

    if (wordLength >= minLength) continue;

    const wordCharToFreq = new Int32Array(26);
    for (const char of word) {
      wordCharToFreq[char.codePointAt(0) - 97]++;
    }

    for (let j = 0; j < 26; j++) {
      if (licenseCharToFreq[j] > wordCharToFreq[j]) {
        continue outer;
      }
    }

    minLength = wordLength;
    shortestCompletingWordNdx = i;
  }

  return words[shortestCompletingWordNdx];
}
