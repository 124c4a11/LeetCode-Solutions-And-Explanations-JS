/**
 * @param {string} s
 * @return {string}
 */
function greatestLetter(s) {
  const asciiToSeen = new Array(123);
  for (const char of s) {
    asciiToSeen[char.codePointAt(0)] = true;
  }

  for (let uppercaseAscii = 90; uppercaseAscii >= 65; uppercaseAscii--) {
    const lowercaseAscii = uppercaseAscii + 32;

    if (asciiToSeen[uppercaseAscii] && asciiToSeen[lowercaseAscii]) {
      return String.fromCodePoint(uppercaseAscii);
    }
  }

  return '';
}
