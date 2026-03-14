/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
function recoverOrder(order, friends) {
  const friendsSet = new Set(friends);

  const result = [];
  for (const participant of order) {
    if (!friendsSet.has(participant)) continue;
    result.push(participant);
  }

  return result;
}
