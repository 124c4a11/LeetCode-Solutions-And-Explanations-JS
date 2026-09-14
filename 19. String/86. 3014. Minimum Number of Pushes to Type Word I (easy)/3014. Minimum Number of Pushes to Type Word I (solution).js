/**
 * @param {string} word
 * @return {number}
 */
function minimumPushes(word) {
  const n = word.length;
  const completeGroups = Math.floor(n / 8);

  let totalPushes = 0;
  let currentLayer = 1;
  for (let groupNdx = 0; groupNdx < completeGroups; groupNdx++) {
    totalPushes += currentLayer * 8;
    currentLayer++;
  }

  const remainingLetters = n % 8;
  totalPushes += currentLayer * remainingLetters;

  return totalPushes;
}
