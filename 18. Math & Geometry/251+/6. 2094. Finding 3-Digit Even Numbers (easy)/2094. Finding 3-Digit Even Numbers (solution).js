/**
 * @param {number[]} digits
 * @return {number[]}
 */
function findEvenNumbers(digits) {
  const digitToFreq = new Int32Array(10);
  for (let digit of digits) digitToFreq[digit]++;

  const evenNums = [];
  for (let num = 100; num < 999; num += 2) {
    const hundred = Math.floor(num / 100);
    const ten = Math.floor((num % 100) / 10);
    const unit = num % 10;

    let canFormNum = true;
    if (--digitToFreq[hundred] < 0) canFormNum = false;
    if (--digitToFreq[ten] < 0) canFormNum = false;
    if (--digitToFreq[unit] < 0) canFormNum = false;

    if (canFormNum) evenNums.push(num);

    digitToFreq[hundred]++;
    digitToFreq[ten]++;
    digitToFreq[unit]++;
  }

  return evenNums;
}
