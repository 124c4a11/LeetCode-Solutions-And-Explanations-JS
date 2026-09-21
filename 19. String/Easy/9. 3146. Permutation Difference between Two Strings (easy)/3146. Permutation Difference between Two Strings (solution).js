/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function findPermutationDifference(s, t) {
  const n = s.length;

  const sCharToNdx = new Int32Array(26);
  for (let i = 0; i < n; i++) {
    sCharToNdx[s.codePointAt(i) - 97] = i;
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    const sCharNdx = sCharToNdx[t.codePointAt(i) - 97];

    result += Math.abs(sCharNdx - i);
  }

  return result;
}
