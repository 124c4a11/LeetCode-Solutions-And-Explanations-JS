/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
function checkDistances(s, distance) {
  const charToFirstPosition = new Int32Array(26);
  for (let position = 1; position <= s.length; position++) {
    const charNdx = s.codePointAt(position - 1) - 97;

    if (charToFirstPosition[charNdx]) {
      const actualDistance = position - charToFirstPosition[charNdx] - 1;

      if (actualDistance !== distance[charNdx]) return false;
    }

    charToFirstPosition[charNdx] = position;
  }

  return true;
}
