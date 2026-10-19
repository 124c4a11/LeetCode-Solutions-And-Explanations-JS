/**
 * @param {string} s
 * @return {number}
 */
function minLength(s) {
  const stack = [];
  for (const char of s) {
    const prevChar = stack.at(-1);
    const isAB = prevChar === 'A' && char === 'B';
    const isCD = prevChar === 'C' && char === 'D';

    if (isAB || isCD) stack.pop();
    else stack.push(char);
  }

  return stack.length;
}
