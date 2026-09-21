/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
function splitWordsBySeparator(words, separator) {
  return words
    .join(separator)
    .split(separator)
    .filter(Boolean);
}
