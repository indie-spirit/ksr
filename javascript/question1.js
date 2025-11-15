
'use strict';
const fs = require('fs');
class SegTree {
  constructor(n) {
    this.n = 1;
    while (this.n < n) this.n <<= 1;
    this.inf = 1e18;
    this.t = Array(this.n * 2).fill(this.inf);
  }
  set(i, val) {
    i += this.n;
    this.t[i] = val;
    while (i > 1) {
      i >>= 1;
      this.t[i] = Math.min(this.t[i<<1], this.t[i<<1|1]);
    }
  }
  rangeMin(l, r) {
    let res = this.inf;
    l += this.n; r += this.n;
    while (l <= r) {
      if (l & 1) res = Math.min(res, this.t[l++]);
      if (!(r & 1)) res = Math.min(res, this.t[r--]);
      l >>= 1; r >>= 1;
    }
    return res;
  }
}
function solve(input) {
  input = input.trim().split(/\s+/).map(Number);
  if (input.length === 0) return;
  let idx = 0;
  const N = input[idx++];
  const a = Array(N+1);
  for (let i=1;i<=N;i++) a[i] = input[idx++];
  const P = Array(N+1).fill(0);
  for (let i=1;i<=N;i++) P[i] = P[i-1] + a[i];
  const negIdx = [];
  for (let i=1;i<=N;i++) if (a[i] < 0) negIdx.push(i);
  if (negIdx.length === 0) {
    console.log(0);
    return;
  }
  const t = negIdx.length;
  const prevGreater = Array(N+1).fill(-1);
  const stack = [];
  for (let i=0;i<=N;i++) {
    while (stack.length && P[stack[stack.length-1]] <= P[i]) stack.pop();
    prevGreater[i] = stack.length ? stack[stack.length-1] : -1;
    stack.push(i);
  }
  const INF = 1e15;
  const seg = new SegTree(t);
  seg.set(0, 0);
  for (let k=1;k<t;k++) seg.set(k, INF);
  const dp = Array(t).fill(INF);
  function lower_bound(arr, x) {
    let l=0, r=arr.length;
    while (l<r) {
      const m=(l+r)>>1;
      if (arr[m] >= x) r=m; else l=m+1;
    }
    return l;
  }
  for (let i=0;i<t;i++) {
    const pos = negIdx[i];
    const g = prevGreater[pos]; 
    const lpos = g + 1;
    const j = lower_bound(negIdx, lpos); 
    const minM = seg.rangeMin(j, i);
    dp[i] = 1 + minM;
    if (i+1 < t) seg.set(i+1, dp[i]);
  }
  console.log(dp[t-1]);
}
const data = fs.readFileSync(0,'utf8');
solve(data);