/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
function reversePrefix(word, ch) {
  const n = word.length;

  const prefixArr = [];
  let i = 0;
  while (i < n) {
    const char = word[i];

    prefixArr.push(char);

    if (char === ch) break;

    i++;
  }

  return i === n
    ? word
    : prefixArr.reverse().join('') + word.slice(i + 1);
}
