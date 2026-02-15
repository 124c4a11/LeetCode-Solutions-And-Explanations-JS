/**
 * @param {number[][]} logs
 * @return {number}
 */
function maximumPopulation(logs) {
  const populationChanges = new Int32Array(101);
  for (const log of logs) {
    populationChanges[log[0] - 1950]++;
    populationChanges[log[1] - 1950]--;
  }

  let maxPopulationYear = 1950;
  let maxPopulation = 0;
  let currPopulation = 0;
  for (let i = 0; i < 101; i++) {
    currPopulation += populationChanges[i];

    if (currPopulation > maxPopulation) {
      maxPopulation = currPopulation;
      maxPopulationYear = i + 1950;
    }
  }

  return maxPopulationYear;
}
