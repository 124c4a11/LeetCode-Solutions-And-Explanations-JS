/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
function xorQueries(arr, queries) {
  const n = arr.length;

  const prefixXors = new Int32Array(n + 1);
  for (let i = 0; i < n; i++) {
    prefixXors[i + 1] = prefixXors[i] ^ arr[i];
  }

  const result = [];
  for (const query of queries) {
    result.push(prefixXors[query[1] + 1] ^ prefixXors[query[0]]);
  }

  return result;
}
