/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reversePrefix(s, k) {
  const prefixArr = [];   
  let i = 0;
  while (i < k) {
    prefixArr.push(s[i]);
    i++;
  }

  return prefixArr.reverse().join('') + s.slice(i);
}
