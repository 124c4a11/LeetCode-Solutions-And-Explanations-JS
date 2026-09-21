/**
 * @param {string[]} words
 * @return {string[]}
 */
function commonChars(words) {
  const result = [];
  for (const char of words[0]) {
    if (words.every((w) => w.includes(char))) {
      result.push(char);
      words = words.map((w) => w.replace(char, ""));
    }
  }

  return result;
}
