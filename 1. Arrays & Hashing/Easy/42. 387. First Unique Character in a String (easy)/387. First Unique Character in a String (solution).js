/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const n = s.length;
  const letters = "abcdefghijklmnopqrstuvwxyz";

  let result = n;
  for (const char of letters) {
    const firstNdx = s.indexOf(char);

    if (
      firstNdx !== -1
      && firstNdx === s.lastIndexOf(char)
      && firstNdx < result
    ) result = firstNdx;
  }

  return result === n ? -1 : result;
}
