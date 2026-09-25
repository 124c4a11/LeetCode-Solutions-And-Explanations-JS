/**
 * @param {string[]} events
 * @return {number[]}
 */
function scoreValidator(events) {
  let score = 0;
  let counter = 0;
  for (const event of events) {
    if (event === 'W') {
      counter++;

      if (counter === 10) break;
    } else if (event === 'WD' || event === 'NB') {
      score++;
    } else {
      score += Number(event);
    }
  }

  return [score, counter];
}
