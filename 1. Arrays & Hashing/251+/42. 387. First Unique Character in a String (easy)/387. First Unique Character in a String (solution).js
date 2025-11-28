/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const n = s.length;
  const letters = "abcdefghijklmnopqrstuvwxyz";

  let result = n;
  for (let i = 0; i < letters.length; i++) {
    const firstNdx = s.indexOf(letters[i]);

    if (
      firstNdx !== -1
      && firstNdx === s.lastIndexOf(letters[i])
      && firstNdx < result
    ) result = firstNdx;
  }

  return result === n ? -1 : result;
}
