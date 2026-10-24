/**
 * @param {number[]} ratings
 * @return {number}
 */
function candy(ratings) {
  const n = ratings.length;

  let result = n;
  let i = 1;
  while (i < n) {
    if (ratings[i] === ratings[i - 1]) {
      i++;
      continue;
    }

    let inc = 0;
    while (
      i < n
      && ratings[i] > ratings[i - 1]
    ) {
      inc++;
      result += inc;
      i++;
    }

    let dec = 0;
    while (
      i < n
      && ratings[i] < ratings[i - 1]
    ) {
      dec++;
      result += dec;
      i++;
    }

    result -= Math.min(inc, dec);
  }

  return result;
}
