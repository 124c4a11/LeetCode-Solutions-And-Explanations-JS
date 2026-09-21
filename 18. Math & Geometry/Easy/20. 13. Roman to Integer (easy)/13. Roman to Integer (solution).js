/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const n = s.length;

  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < n; i++) {
    if (
      i + 1 < n
      && roman[s[i]] < roman[s[i + 1]]
    ) {
      result -= roman[s[i]];
    } else {
      result += roman[s[i]];
    }
  }

  return result;
}
