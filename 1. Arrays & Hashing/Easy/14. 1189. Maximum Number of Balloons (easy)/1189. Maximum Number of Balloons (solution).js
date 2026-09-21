/**
 * @param {string} text
 * @return {number}
 */
function maxNumberOfBalloons(text) {
  const balloonMap = new Map([
    ['b', 0],
    ['a', 0],
    ['l', 0],
    ['o', 0],
    ['n', 0]
  ]);

  for (const char of text) {
    if (!balloonMap.has(char)) continue

    balloonMap.set(char, balloonMap.get(char) + 1);
  }

  return Math.min(
    balloonMap.get('b'),
    balloonMap.get('a'),
    Math.floor(balloonMap.get('l') / 2),
    Math.floor(balloonMap.get('o') / 2),
    balloonMap.get('n')
  );
};
