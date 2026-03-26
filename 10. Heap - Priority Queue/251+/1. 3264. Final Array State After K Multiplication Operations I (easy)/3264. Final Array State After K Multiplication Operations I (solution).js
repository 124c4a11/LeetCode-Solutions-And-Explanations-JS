/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
function getFinalState(nums, k, multiplier) {
  const minHeap = new PriorityQueue((a, b) => {
    if (nums[a] === nums[b]) return a - b;
    return nums[a] - nums[b];
  });
  for (let i = 0; i < nums.length; i++) {
    minHeap.enqueue(i);
  }

  while (k--) {
    const i = minHeap.dequeue();

    nums[i] *= multiplier;
    minHeap.enqueue(i);
  }

  return nums;
}
