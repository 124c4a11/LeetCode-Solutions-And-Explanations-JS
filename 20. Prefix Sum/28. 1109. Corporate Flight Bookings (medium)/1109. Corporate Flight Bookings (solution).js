/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
function corpFlightBookings(bookings, n) {
  const result = new Int32Array(n);
  for (const booking of bookings) {
    const first = booking[0];
    const last = booking[1];
    const seats = booking[2];

    result[first - 1] += seats;

    if (last < n) result[last] -= seats
  }

  for (let i = 1; i < n; i++) {
    result[i] += result[i - 1];
  }

  return result;
}
