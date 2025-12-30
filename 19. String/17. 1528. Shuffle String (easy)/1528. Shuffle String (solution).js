/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
function restoreString(s, indices) {
  const n = s.length; 
  
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[indices[i]] = s[i];
  }

  return result.join('');
};
