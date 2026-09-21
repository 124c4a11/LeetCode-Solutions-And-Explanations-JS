/**
 * @param {number[]} nums
 * @return {boolean}
 */
function checkPrimeFrequency(nums) {
  const numToFreq = new Int32Array(101);
  for (const num of nums) numToFreq[num]++;

  for (const freq of numToFreq) {
    if (isPrime(freq)) return true;
  }

  return false;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if ((num & 1) === 0) return false;

  const boundary = Math.sqrt(num);
  for (let i = 3; i <= boundary; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}
