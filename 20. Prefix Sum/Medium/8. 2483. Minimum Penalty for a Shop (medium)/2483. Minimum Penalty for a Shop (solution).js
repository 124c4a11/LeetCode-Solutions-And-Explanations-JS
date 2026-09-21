/**
 * @param {string} customers
 * @return {number}
 */
function bestClosingTime(customers) {
  let closingTime = 0;
  let currProfit = 0;
  let maxProfit = 0;
  for (let i = 0; i < customers.length; i++) {
    if (customers[i] === "Y") currProfit++;
    else currProfit--;

    if (currProfit > maxProfit) {
      maxProfit = currProfit;
      closingTime = i + 1;
    }
  }

  return closingTime;
}
