/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
function isSumEqual(firstWord, secondWord, targetWord) {
  const firstWordNum = convertWordToNumber(firstWord);
  const secondWordNum = convertWordToNumber(secondWord);
  const targetWordNum = convertWordToNumber(targetWord);

  return firstWordNum + secondWordNum === targetWordNum;
}

function convertWordToNumber(word) {
  let num = 0;
  for (const char of word) {
    num = num * 10 + char.codePointAt(0) - 97;
  }

  return num;
}
