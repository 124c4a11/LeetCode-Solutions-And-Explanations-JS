/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
function bestHand(ranks, suits) {
  let isFlush = false;
  let isThreeOfAKind = false;
  let isPair = false;
  const suitToFreq = new Int32Array(4);
  const rankToFreq = new Int32Array(14);
  for (let i = 0; i < ranks.length; i++) {
    const rank = ranks[i];

    rankToFreq[rank]++;

    if (rankToFreq[rank] === 3) isThreeOfAKind = true;
    if (rankToFreq[rank] === 2) isPair = true;

    const suitNdx = suits[i].codePointAt(0) - 97;

    suitToFreq[suitNdx]++;

    if (suitToFreq[suitNdx] === 5) isFlush = true;
  }

  if (isFlush) return 'Flush';
  if (isThreeOfAKind) return 'Three of a Kind';
  if (isPair) return 'Pair';

  return 'High Card';
}
