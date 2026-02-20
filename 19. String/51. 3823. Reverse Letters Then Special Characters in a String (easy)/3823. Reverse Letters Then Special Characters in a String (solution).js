/**
 * @param {string} s
 * @return {string}
 */
function reverseByType(s) {
  const lettersStack = [];
  const specialsStack = [];
  for (const char of s) {
    if (isSpecialChar(char)) {
      specialsStack.push(char);
    } else {
      lettersStack.push(char);
    }
  }

  const result = [];
  for (const char of s) {
    if (isSpecialChar(char)) {
      result.push(specialsStack.pop());
    } else {
      result.push(lettersStack.pop());
    }
  }

  return result.join('');
}

function isSpecialChar(char) {
  return char < 'a' || 'z' < char;
}
