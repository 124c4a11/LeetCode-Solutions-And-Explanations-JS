/**
 * @param {string} s
 * @return {number}
 */
function countAsterisks(s) {
  let result = 0;
  let isInsidePipes = false;
  for (const char of s) {
    if (char === '|') isInsidePipes = !isInsidePipes
    if (char === '*' && !isInsidePipes) result++;
  }

  return result;
}
