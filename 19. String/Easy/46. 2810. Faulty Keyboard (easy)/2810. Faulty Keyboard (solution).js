/**
 * @param {string} s
 * @return {string}
 */
function finalString(s) {
  const result = [];
  for (const char of s) {
    if (char === 'i') result.reverse();
    else result.push(char);
  }

  return result.join('');
}
