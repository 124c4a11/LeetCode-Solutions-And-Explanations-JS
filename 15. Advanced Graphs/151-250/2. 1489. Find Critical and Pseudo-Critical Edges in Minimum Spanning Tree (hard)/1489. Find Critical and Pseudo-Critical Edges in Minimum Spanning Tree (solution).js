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


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
function findCriticalAndPseudoCriticalEdges(n, edges) {
  for (let i = 0; i < edges.length; i++) {
    edges[i].push(i);
  }

  edges.sort((a, b) => a[2] - b[2]);

  function findMST(ndx, include) {
    const dsu = new DSU(n);
    let weight = 0;

    if (include) {
      weight += edges[ndx][2];
      dsu.union(edges[ndx][0], edges[ndx][1]);
    }

    for (let i = 0; i < edges.length; i++) {
      if (i === ndx) continue;
      if (dsu.union(edges[i][0], edges[i][1])) {
        weight += edges[i][2];
      }
    }

    return dsu.isConnected() ? weight : Infinity;
  };

  const pseudo = [];
  const critical = [];
  const mstWeight = findMST(-1, false);
  for (let i = 0; i < edges.length; i++) {
    if (mstWeight < findMST(i, false)) {
      critical.push(edges[i][3]);
    } else if (mstWeight === findMST(i, true)) {
      pseudo.push(edges[i][3]);
    }
  };

  return [critical, pseudo];
}
