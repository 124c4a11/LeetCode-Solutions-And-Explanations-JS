/**
 * @param {string[]} sentences
 * @return {number}
 */
function mostWordsFound(sentences) {
  let result = 0; 
  for (const sentence of sentences) {
    result = Math.max(
      result,  
      sentence.split(' ').length
    );
  }

  return result;
}
