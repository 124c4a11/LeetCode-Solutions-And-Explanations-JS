/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
function longestDiverseString(a, b, c) {
  const charFreq = [a, b, c];

  function getMaxNdx(blockedNdx) {
    let maxFreq = 0;
    let i = -1;
    for (let j = 0; j < 3; j++) {
      if (
        j === blockedNdx
        || charFreq[j] <= maxFreq
      ) continue;

      maxFreq = charFreq[j];
      i = j;
    }

    return i;
  };

  const result = [];
  let blockedNdx = -1;
  while (true) {
    const maxNdx = getMaxNdx(blockedNdx);
    if (maxNdx === -1) break;

    result.push(String.fromCharCode(maxNdx + 97));
    charFreq[maxNdx]--;

    if (
      result.length > 1
      && result.at(-1) === result.at(-2)
    ) {
      blockedNdx = maxNdx;
    } else {
      blockedNdx = -1;
    }
  }

  return result.join('');
}
