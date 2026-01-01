/**
 * @param {string} s
 * @return {number}
 */
function maxDepth(s) {
  let result = 0;
  let depth = 0;
  for (const char of s) {
    if (char === '(') {
      depth++;
      result = Math.max(result, depth);
    } else if (char === ')') {
      depth--;
    }
  }

  return result;
}
