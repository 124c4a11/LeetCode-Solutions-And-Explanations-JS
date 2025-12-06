/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
  const max = Math.max(...arr1);

  const num1Freq = new Int32Array(max + 1);
  for (const num of arr1) num1Freq[num]++;

  const result = [];
  for (const num of arr2) {
    while (num1Freq[num]-- > 0) result.push(num);
  }

  for (let num = 0; num < num1Freq.length; num++) {
    while (num1Freq[num]-- > 0) result.push(num);
  }

  return result;
}
