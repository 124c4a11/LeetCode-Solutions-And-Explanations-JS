/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const magazineCharFreq = new Int32Array(26);
  for (const char of magazine) {
    magazineCharFreq[char.charCodeAt(0) - 97]++;
  }

  const ransomCharFreq = new Int32Array(26);
  for (const char of ransomNote) {
    const i = char.charCodeAt(0) - 97;

    ransomCharFreq[i]++

    if (ransomCharFreq[i] > magazineCharFreq[i]) {
      return false;
    }
  }

  return true;
}
