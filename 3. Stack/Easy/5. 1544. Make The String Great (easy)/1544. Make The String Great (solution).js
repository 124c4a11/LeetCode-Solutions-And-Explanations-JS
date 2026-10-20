/**
 * @param {string} s
 * @return {string}
 */
function makeGood(s) {
  const stack = [];
  for (const char of s) {
    if (
      stack.length
      && Math.abs(stack.at(-1).codePointAt(0) - char.codePointAt(0)) === 32
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}
