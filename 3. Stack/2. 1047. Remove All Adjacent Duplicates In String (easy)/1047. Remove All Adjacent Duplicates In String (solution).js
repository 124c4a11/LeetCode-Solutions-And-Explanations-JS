/**
 * @param {string} s
 * @return {string}
 */
function removeDuplicates(s) {
  const stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (stack.at(-1) === s[i]) stack.pop();
    else stack.push(s[i]);
  }

  return stack.join('');
}
