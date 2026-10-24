/**
 * @param {number[]} arr
 * @return {number}
 */
function maxTurbulenceSize(arr) {
  let result = 0;
  let cnt = 0;
  let sign = '=';
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      cnt = sign === '<' ? cnt + 1 : 1;
      sign = '>';
    } else if (arr[i] < arr[i + 1]) {
      cnt = sign === '>' ? cnt + 1 : 1;
      sign = '<';
    } else {
      cnt = 0;
      sign = '=';
    }

    result = Math.max(result, cnt);
  }

  return result + 1;
}
