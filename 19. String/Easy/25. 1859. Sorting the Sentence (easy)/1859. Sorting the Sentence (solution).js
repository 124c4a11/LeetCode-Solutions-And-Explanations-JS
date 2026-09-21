/**
 * @param {string} s
 * @return {string}
 */
function sortSentence(s) {
  const result = [];
  const wordArr = []; 
  let i = 0;
  while (i < s.length) {
    const char = s[i];

    if (!isNaN(char)) {
      result[char - 1] = wordArr.join('');
      wordArr.length = 0;
      i += 2;
      continue;
    }

    wordArr.push(char);
    i++;
  }

  return result.join(' ');
}
