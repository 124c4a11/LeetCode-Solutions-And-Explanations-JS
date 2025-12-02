/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
function timeRequiredToBuy(tickets, k) {
  let result = 0;
  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      result += Math.min(tickets[i], tickets[k]);
    } else {
      result += Math.min(tickets[i], tickets[k] - 1);
    }
  }

  return result;
}
