/**
 * @param {string[]} words
 * @return {string}
 */
function firstPalindrome(words) {
  for (const word of words) {
    if (isPalindrome(word)) return word;
  } 

  return '';
}

function isPalindrome(s) {
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    if (s[l] !== s[r]) return false;

    l++;
    r--;
  }

  return true;
}
