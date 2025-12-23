/**
 * @param {string} s
 * @return {number}
 */
function balancedStringSplit(s) {
  let result = 0;
  let delta = 0;
  for (const char of s) {
    if (char === 'L') delta++;
    else delta--;

    if (!delta) result++
  }

  return result;
}
