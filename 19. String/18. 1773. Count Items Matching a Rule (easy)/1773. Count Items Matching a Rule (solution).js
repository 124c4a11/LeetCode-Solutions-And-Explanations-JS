/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
function countMatches(items, ruleKey, ruleValue) {
  const keyToNdx = {
    type: 0,
    color: 1,
    name: 2,
  };

  let result = 0;
  for (const item of items) {
    if (item[keyToNdx[ruleKey]] === ruleValue) result++;
  }

  return result;
}
