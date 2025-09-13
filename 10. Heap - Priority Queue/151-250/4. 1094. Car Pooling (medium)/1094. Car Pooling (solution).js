/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
function carPooling(trips, capacity) {
  let passengerDeltaByKm = new Int32Array(1001);
  for (const [numPassengers, from, to] of trips) {
    passengerDeltaByKm[from] += numPassengers;
    passengerDeltaByKm[to] -= numPassengers;
  }

  let currCapacity = 0;
  for (let i = 0; i < 1001; i++) {
    currCapacity += passengerDeltaByKm[i];
    if (currCapacity > capacity) return false;
  }

  return true;
}
