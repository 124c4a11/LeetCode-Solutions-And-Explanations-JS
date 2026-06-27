/**
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayRankTransform(arr) {
  const n = arr.length;

  const sortedNums = [...new Set(arr)].sort((a, b) => a - b);

  const numToRank = new Map();
  let currRank = 1;
  for (const num of sortedNums) {
    numToRank.set(num, currRank);
    currRank++;
  }

  const ranks = new Array(n);
  for (let i = 0; i < n; i++) {
    ranks[i] = numToRank.get(arr[i]);
  }

  return ranks;
}
