/**
 * @param {string[]} strings
 * @return {string[][]}
 */
function groupStrings(strings) {
  function getHash(string) {
    const hash = [];
    for (let i = 1; i < string.length; i++) {
      const diff = (string.codePointAt(i) - string.codePointAt(i - 1) + 26) % 26;

      hash.push(String.fromCodePoint(diff + 'a'.codePointAt(0)));
    }

    return hash.join('');
  }

  const groups = new Map();
  for (const string of strings) {
    const hash = getHash(string);

    if (!groups.has(hash)) {
      groups.set(hash, []);
    }

    groups.get(hash).push(string);
  }

  return Array.from(groups.values());
}
