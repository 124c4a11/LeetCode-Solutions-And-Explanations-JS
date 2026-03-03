/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
function maxConsecutiveAnswers(answerKey, k) {
  let maxConsecutive = 0;
  let tCnt = 0;
  let fCnt = 0;
  let l = 0;
  for (let i = 0; i < answerKey.length; i++) {
    answerKey[i] === 'T' ? tCnt++ : fCnt++;

    while (tCnt > k && fCnt > k) {
      answerKey[l] === 'T' ? tCnt-- : fCnt--;
      l++;
    }

    maxConsecutive = Math.max(maxConsecutive, i - l + 1);
  }

  return maxConsecutive;
}
