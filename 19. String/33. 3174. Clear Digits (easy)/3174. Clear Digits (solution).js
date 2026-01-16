/**
 * @param {string} s
 * @return {string}
 */
function clearDigits(s) {
  const stack = [];
  for (const char of s) {
    if (!isNaN(char)) stack.pop();
    else stack.push(char);
  }

  return stack.join('');
}
