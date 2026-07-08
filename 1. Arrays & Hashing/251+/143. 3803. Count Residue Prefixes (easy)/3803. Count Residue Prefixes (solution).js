/**
 * @param {string} s
 * @return {number}
 */
function residuePrefixes(s) {
  let residuePrefixesCnt = 0;
  let prefixUniqueCharsCnt = 0;
  const charToSeen = new Array(26);
  for (let i = 0; i < s.length; i++) {
    const charNdx = s.codePointAt(i) - 97;

    if (!charToSeen[charNdx]) {
      charToSeen[charNdx] = true;
      prefixUniqueCharsCnt++;
    }

    const prefixLength = i + 1;

    if (prefixLength % 3 !== prefixUniqueCharsCnt) continue;

    residuePrefixesCnt++;
  }

  return residuePrefixesCnt;
}
