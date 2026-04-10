/**
 * @param {string} word
 * @return {number}
 */
function minTimeToType(word) {
  let totalTime = word.length;
  let currCodePoint = 'a'.codePointAt(0);
  for (const char of word) {
    const targetCodePoint = char.codePointAt(0);
    const directDistance = Math.abs(targetCodePoint - currCodePoint);
    const minDistance = Math.min(directDistance, 26 - directDistance);

    totalTime += minDistance;

    currCodePoint = targetCodePoint;
  }

  return totalTime;
}
