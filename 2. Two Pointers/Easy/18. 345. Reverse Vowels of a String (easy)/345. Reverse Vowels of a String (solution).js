/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  const chars = s.split('');
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    while (l < r && !vowelSet.has(chars[l])) l++;
    while (l < r && !vowelSet.has(chars[r])) r--;

    const tmp = chars[l];
    chars[l] = chars[r];
    chars[r] = tmp;

    l++;
    r--;
  }

  return chars.join('');
}
