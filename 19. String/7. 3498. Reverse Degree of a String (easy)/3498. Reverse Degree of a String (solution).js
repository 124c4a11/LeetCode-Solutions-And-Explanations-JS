/**
 * @param {string} s
 * @return {number}
 */
function reverseDegree(s) {
  let result = 0; 
  for (let i = 0; i < s.length; i++) {
    const reversePosition = 26 - (s.codePointAt(i) - 97); 

    result += reversePosition * (i + 1);
  }

  return result;
}
