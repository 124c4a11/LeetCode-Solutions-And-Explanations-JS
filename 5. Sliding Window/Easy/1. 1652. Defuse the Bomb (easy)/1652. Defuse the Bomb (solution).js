/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
function decrypt(code, k) {
  let n = code.length;
  let decrypted = new Array(n).fill(0);

  if (k === 0) return decrypted;

  let l;
  let r;
  if (k > 0) {
    l = 1;
    r = k;
  } else {
    l = n - Math.abs(k);
    r = n - 1;
  }

  let windowSum = 0;
  for (let i = l; i <= r; i++) {
    windowSum += code[i % n];
  }

  for (let i = 0; i < n; i++) {
    decrypted[i] = windowSum;
    windowSum -= code[l % n];

    l++;
    r++;

    windowSum += code[r % n];
  }

  return decrypted;
}
