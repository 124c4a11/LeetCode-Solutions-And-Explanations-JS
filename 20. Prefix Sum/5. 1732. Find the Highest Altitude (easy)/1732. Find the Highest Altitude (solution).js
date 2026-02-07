/**
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitude(gain) {
  let maxAltitude = 0;
  let currAltitude = 0;
  for (const altitude of gain) {
    currAltitude += altitude;
    maxAltitude = Math.max(maxAltitude, currAltitude);
  }

  return maxAltitude;
}
