/**
 * @param {string} s
 * @return {character}
 */
function repeatedCharacter(s) {
  const charToSeen = new Array(26);
  for (const char of s) {
    const i = char.codePointAt(0) - 97;

    if (charToSeen[i]) return char;

    charToSeen[i] = true;
  }

  return ' ';
}
