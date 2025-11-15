

class SegTree {
  constructor(n) {
    this.N = 1;
    while (this.N < n) this.N <<= 1;
    this.inf = 1e9;
    this.data = new Array(this.N * 2).fill(this.inf);
  }
  update(pos, val) {
    pos += this.N;
    this.data[pos] = val;
    pos >>= 1;
    while (pos) {
      this.data[pos] = Math.min(this.data[pos << 1], this.data[(pos << 1) | 1]);
      pos >>= 1;
    }
  }
  rangeMin(l, r) {
    if (l > r) return this.inf;
    l += this.N; r += this.N;
    let res = this.inf;
    while (l <= r) {
      if ((l & 1) === 1) res = Math.min(res, this.data[l++]);
      if ((r & 1) === 0) res = Math.min(res, this.data[r--]);
      l >>= 1; r >>= 1;
    }
    return res;
  }
}

function minCollapses(arr) {
  const n = arr.length;
  const s = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) s[i] = s[i - 1] + arr[i - 1];

  // nextLess via monotonic stack (increasing stack of s values)
  const nextLess = new Array(n + 1).fill(n + 1);
  const stack = [];
  for (let i = 0; i <= n; i++) {
    while (stack.length && s[i] < s[stack[stack.length - 1]]) {
      const idx = stack.pop();
      nextLess[idx] = i;
    }
    stack.push(i);
  }

  const upTo = new Array(n + 2).fill(0);
  for (let i = 1; i <= n; i++) upTo[i] = nextLess[i - 1] - 1;

  const INF = 1e9;
  const dp = new Array(n + 2).fill(INF);
  // dp[n+1] = 0
  dp[n + 1] = 0;

  // segtree indexed 1..n+1 for dp values
  const seg = new SegTree(n + 2);
  for (let i = 1; i <= n + 1; i++) seg.update(i, INF);
  seg.update(n + 1, 0);

  for (let i = n; i >= 1; i--) {
    let minKeep = INF;
    if (upTo[i] >= i) {
      // dp[t+1] for t in [i..upTo[i]] -> indices [i+1 .. upTo[i]+1]
      minKeep = seg.rangeMin(i + 1, upTo[i] + 1);
    }
    const optionRemove = 1 + seg.rangeMin(i + 1, n + 1);
    dp[i] = Math.min(minKeep, optionRemove);
    seg.update(i, dp[i]);
  }

  return dp[1];
}

// CLI
function solveFromStdin(input) {
  const tokens = input.trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return;
  const n = Number(tokens[0]);
  const arr = tokens.slice(1, 1 + n).map(Number);
  console.log(minCollapses(arr));
}

if (typeof require !== 'undefined' && require.main === module) {
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf8');
  solveFromStdin(input);
}

module.exports = { minCollapses, solveFromStdin };
