/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
function toggleLightBulbs(bulbs) {
  const bulbToToggleCnt = new Int32Array(101);
  for (const bulb of bulbs) bulbToToggleCnt[bulb]++;

  const lightBulbs = [];
  for (let bulb = 1; bulb < 101; bulb++) {
    const toggleCnt = bulbToToggleCnt[bulb];

    if ((toggleCnt & 1) === 1) lightBulbs.push(bulb);
  }

  return lightBulbs;
}
