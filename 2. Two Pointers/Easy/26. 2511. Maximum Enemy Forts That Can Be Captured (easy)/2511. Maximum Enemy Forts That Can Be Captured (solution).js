/**
 * @param {number[]} forts
 * @return {number}
 */
function captureForts(forts) {
  const n = forts.length;

  let maxCaptured = 0;
  let i = 0;
  while (i < n) {
    let j = i + 1;
    if (forts[i] !== 0) {
      while (
        j < n
        && forts[j] === 0
      ) j++;

      if (
        j < n
        && forts[i] + forts[j] === 0
      ) {
        const capturedCnt = j - i - 1;

        maxCaptured = Math.max(maxCaptured, capturedCnt);
      }
    }

    i = j;
  }

  return maxCaptured;
}
