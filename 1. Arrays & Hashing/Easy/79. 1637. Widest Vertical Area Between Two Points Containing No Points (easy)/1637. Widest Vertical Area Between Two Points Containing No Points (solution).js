/**
 * @param {number[][]} points
 * @return {number}
 */
function maxWidthOfVerticalArea(points) {
  points.sort((a, b) => a[0] - b[0]);

  let maxVerticalArea = 0;
  for (let i = 1; i < points.length; i++) {
    maxVerticalArea = Math.max(
      maxVerticalArea,
      points[i][0] - points[i - 1][0]
    );
  }

  return maxVerticalArea;
}
