/**
 * @param {string} s
 * @return {number}
 */
function minimizedStringLength(s) {
  let uniqueCharsCnt = 0;
  const charToSeen = new Array(26);
  for (const char of s) {
    const charNdx = char.codePointAt(0) - 97;

    if (charToSeen[charNdx]) continue;

    charToSeen[charNdx] = true;
    uniqueCharsCnt++;
  }

  return uniqueCharsCnt;
}
