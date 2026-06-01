/**
 * @param {string} word
 * @return {number}
 */
function numberOfSpecialChars(word) {
  const charToSeen = new Array(58);
  for (const char of word) {
    charToSeen[char.codePointAt(0) - 65] = true;
  }

  let specialCharsCnt = 0;
  for (let i = 0; i < 26; i++) {
    if (
      charToSeen[i]
      && charToSeen[i + 32]
    ) specialCharsCnt++;
  }

  return specialCharsCnt;
}
