/**
 * @param {string} s
 * @return {number}
 */
function minimumChairs(s) {
  let result = 0;
  let currentOccupancy = 0;
  for (const char of s) {
    if (char === 'E') {
      currentOccupancy++;
      result = Math.max(result, currentOccupancy);
    } else {
      currentOccupancy--;
    }
  }

  return result;
}
