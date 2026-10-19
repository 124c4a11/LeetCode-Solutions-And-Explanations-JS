/**
 * @param {string} s
 * @return {string}
 */
function makeFancyString(s) {
  const stack = [s[0], s[1]];
  for (let i = 2; i < s.length; i++)
  {
    if (
      s[i] != stack.at(-2)
      || s[i] != stack.at(-1)
    ) stack.push(s[i]);
  }

  return stack.join('');
}
