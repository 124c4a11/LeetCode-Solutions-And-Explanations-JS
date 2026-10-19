/**
 * @param {number[]} prices
 * @return {number[]}
 */
function finalPrices(prices) {
  const increasingIndexStack = [];
  for (let i = 0; i < prices.length; i++) {
    while (
      increasingIndexStack.length
      && prices[increasingIndexStack.at(-1)] >= prices[i]
    ) {
      const j = increasingIndexStack.pop();
      prices[j] -= prices[i]
    }

    increasingIndexStack.push(i);
  }

  return prices;
}
