/**
 * @param {string} word
 * @return {number}
 */
function possibleStringCount(word) {
  let adjacentPairsCnt = 0;
  for (let i = 1; i < word.length; i++) {
    if (word[i - 1] === word[i]) adjacentPairsCnt++;
  }

  return adjacentPairsCnt + 1;
}
