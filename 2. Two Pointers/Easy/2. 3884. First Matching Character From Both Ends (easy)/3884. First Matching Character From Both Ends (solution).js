/**
 * @param {string} s
 * @return {number}
 */
function firstMatchingIndex(s) {
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    if (s[l] === s[r]) return l;

    l++;
    r--;
  }

  return -1;
}
