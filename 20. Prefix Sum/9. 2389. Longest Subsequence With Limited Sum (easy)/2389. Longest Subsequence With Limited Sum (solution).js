/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
function answerQueries(nums, queries) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  return queries.map((query) => binarySearchUpperBound(nums, query));
}

function binarySearchUpperBound(arr, target) {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    const midd = Math.floor(l + (r - l) / 2);

    if (arr[midd] <= target) l = midd + 1;
    else r = midd;
  }

  return l;
}
