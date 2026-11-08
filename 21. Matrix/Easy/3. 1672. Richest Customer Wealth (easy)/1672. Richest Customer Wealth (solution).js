/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(accounts) {
  let maxWealth = 0;
  for (const account of accounts) {
    const currWealth = account.reduce((a, b) => a + b);

    maxWealth = Math.max(maxWealth, currWealth);
  }

  return maxWealth;
}
