/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
function garbageCollection(garbage, travel) {
  const n = garbage.length;

  const prefixSums = new Int32Array(n);
  for (let i = 0; i < travel.length; i++) {
    prefixSums[i + 1] = prefixSums[i] + travel[i];
  }

  let result = 0;
  let lastMNdx = 0;
  let lastPNdx = 0;
  let lastGNdx = 0;
  for (let i = 0; i < n; i++) {
    result += garbage[i].length;

    if (garbage[i].includes('M')) lastMNdx = i;
    if (garbage[i].includes('P')) lastPNdx = i;
    if (garbage[i].includes('G')) lastGNdx = i;
  }

  result += prefixSums[lastMNdx] + prefixSums[lastPNdx] + prefixSums[lastGNdx];

  return result;
}
