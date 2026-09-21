/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
function countWords(words1, words2) {
  const wordToStatus = new Map();
  for (const word of words1) {
    if (wordToStatus.has(word)) wordToStatus.set(word, 0);
    else wordToStatus.set(word, 1);
  }

  let validWordsCnt = 0;
  for (const word of words2) {
    if (!wordToStatus.has(word)) continue;

    const status = wordToStatus.get(word);

    if (status === 1) {
      validWordsCnt++;
      wordToStatus.set(word, 2);
    } else if (status === 2) {
      validWordsCnt--;
      wordToStatus.set(word, 0);
    }
  }

  return validWordsCnt;
}
