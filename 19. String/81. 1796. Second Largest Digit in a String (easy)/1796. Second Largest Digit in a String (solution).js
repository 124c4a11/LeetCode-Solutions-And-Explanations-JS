/**
 * @param {string} s
 * @return {number}
 */
function secondHighest(s) {
  let highestNum = -1;
  let secondHighestNum = -1;
  for (const char of s) {
    const num = Number(char);

    if (Number.isNaN(num)) continue;

    if (num > highestNum)
    {
      secondHighestNum = highestNum;
      highestNum = num;
    } else if (
      num > secondHighestNum
      && num != highestNum
    ) {
      secondHighestNum = num;
    }
  }

  return secondHighestNum;
}
