class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Int32Array(n).fill(1);
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

    return true;
  }
}


/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
function accountsMerge(accounts) {
  const n = accounts.length;
  const dsu = new DSU(n);

  const emailToAcc = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      const email = accounts[i][j];

      if (emailToAcc.has(email)) {
        dsu.union(i, emailToAcc.get(email));
      } else {
        emailToAcc.set(email, i);
      }
    }
  }

  const emailGroup = new Map();
  for (const [email, accId] of emailToAcc) {
    const leader = dsu.find(accId);

    if (!emailGroup.has(leader)) {
      emailGroup.set(leader, []);
    }

    emailGroup.get(leader).push(email);
  }

  const result = [];
  for (const [accId, emails] of emailGroup) {
    emails.sort();

    const merged = [accounts[accId][0], ...emails];

    result.push(merged);
  }

  return result;
}
