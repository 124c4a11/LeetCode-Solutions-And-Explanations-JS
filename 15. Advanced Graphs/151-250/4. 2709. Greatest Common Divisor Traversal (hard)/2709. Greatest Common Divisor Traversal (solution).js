class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Int32Array(n).fill(1);
    this.n = n;
  }

  find(node) {
    while (this.parent[node] !== node) {
      this.parent[node] = this.parent[this.parent[node]];
      node = this.parent[node];
    }

    return node;
  }

  union(u, v) {
    let pu = this.find(u);
    let pv = this.find(v);

    if (pu === pv) return false;

    if (this.rank[pv] > this.rank[pu]) {
      [pu, pv] = [pv, pu];
    }

    this.parent[pv] = pu;
    this.rank[pu] += this.rank[pv];
    this.n--;

    return true;
  }

  isConnected() {
    return this.n === 1;
  }
}

const primes = new Set();
const numberToFactors = new Map();
for (let i = 2; i <= 100000; i++) {
  numberToFactors.set(i, []);
  primes.add(i);
}
for (let i = 2; i <= 100000; i++) {
  if (!primes.has(i)) continue;

  numberToFactors.get(i).push(i)

  for (let j = 2; j * i <= 100000; j++) {
    numberToFactors.get(i * j).push(i)
    primes.delete(i * j)
  }
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canTraverseAllPairs(nums) {
  const numSet = new Set(nums);

  if (
    nums.length > 1
    && numSet.has(1)
  ) return false;
  if (numSet.size === 1) return true;

  const dsu = new DSU(numSet.size);
  const primeToNdx = new Map();
  let i = 0;
  for (const num of numSet) {
    for (const prime of numberToFactors.get(num)) {
      if (primeToNdx.has(prime)) {
        dsu.union(primeToNdx.get(prime), i);
      } else {
        primeToNdx.set(prime, i);
      }
    }

    i++
  }

  return dsu.isConnected();
}
