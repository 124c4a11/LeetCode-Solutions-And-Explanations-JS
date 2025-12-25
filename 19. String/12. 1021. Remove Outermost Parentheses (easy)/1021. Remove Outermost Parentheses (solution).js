/**
 * @param {string} s
 * @return {string}
 */
function removeOuterParentheses(s) {
  const result = [];
  let depth = 0;
  for (const char of s) {
    if (char === '(') depth++;

    if (depth > 1) result.push(char);

    if (char === ')') depth--;
  }

  return result.join('');
}
