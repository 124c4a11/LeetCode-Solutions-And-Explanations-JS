/**
 * @param {string} sentence
 * @return {string}
 */
function toGoatLatin(sentence) {
  const words = sentence.split(' ');
  const n = words.length;
  const vowelsRegExp = /[aeiou]/i;

  const goatLatinWords = new Array(n);
  for (let i = 0; i < n; i++) {
    const word = words[i];
    const isStartsWithVowel = vowelsRegExp.test(word[0]);

    let transformedWord;
    if (isStartsWithVowel) {
      transformedWord = word;
    } else {
      transformedWord = word.slice(1) + word[0];
    }

    const aSuffix = 'a'.repeat(i + 1);
    const finalWord = `${transformedWord}ma${aSuffix}`;

    goatLatinWords[i] = finalWord;
  }

  return goatLatinWords.join(' ');
}
