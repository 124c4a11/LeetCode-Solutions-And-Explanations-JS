/**
 * @param {number[][]} customers
 * @return {number}
 */
function averageWaitingTime(customers) {
  let currEndTime = 0;
  let totalWaitingTime = 0;
  for (const customer of customers) {
    const arrival = customer[0];
    const order = customer[1];

    currEndTime = Math.max(currEndTime, arrival) + order;
    totalWaitingTime += currEndTime - arrival;
  }

  return totalWaitingTime / customers.length;
}
