/**
 * @param {string} s
 * @return {string}
 */
function reverseOnlyLetters(s) {
  const chars = s.split('');

  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    while (!/[a-zA-Z]/.test(chars[l]) && l < r) l++;
    while (!/[a-zA-Z]/.test(chars[r]) && l < r) r--;

    const tmp = chars[l];

    chars[l] = chars[r];
    chars[r] = tmp;

    l++;
    r--;
  }

  return chars.join('');
}
