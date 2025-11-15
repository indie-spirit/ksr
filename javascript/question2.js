

'use strict';

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;

const N = input[idx++];

const A = Array.from({length: N}, () => {
  return Array.from({length: N}, () => input[idx++]);
});

const rowSum = new Array(N).fill(0);
const colSum = new Array(N).fill(0);
for (let i = 0; i < N; ++i) {
  for (let j = 0; j < N; ++j) {
    rowSum[i] += A[i][j];
    colSum[j] += A[i][j];
  }
}


function toBig(n) { return BigInt(n); }

function modPow(a, e, m) {
  a = a % m;
  let res = 1n;
  while (e > 0n) {
    if (e & 1n) res = (res * a) % m;
    a = (a * a) % m;
    e >>= 1n;
  }
  return res;
}

function isPrimeBig(n) {
  if (n < 2n) return false;
  if (n % 2n === 0n) return (n === 2n);
  if (n % 3n === 0n) return (n === 3n);

  const smallPrimes = [5n,7n,11n,13n,17n,19n,23n,29n,31n,37n];
  for (const p of smallPrimes) {
    if (n === p) return true;
    if (n % p === 0n) return false;
  }

  let d = n - 1n;
  let s = 0n;
  while ((d & 1n) === 0n) { d >>= 1n; s++; }

  const bases = [2n, 325n, 9375n, 28178n, 450775n, 9780504n, 1795265022n];

  for (const a of bases) {
    if (a % n === 0n) return true;
    let x = modPow(a, d, n);
    if (x === 1n || x === n - 1n) continue;
    let cont = false;
    for (let r = 1n; r < s; ++r) {
      x = (x * x) % n;
      if (x === n - 1n) { cont = true; break; }
    }
    if (cont) continue;
    return false;
  }
  return true;
}

function neededStepsToPrime(start, step) {
  let s = BigInt(start);
  const st = BigInt(step);

  const MAX_K = 200000; 
  for (let k = 0; k <= MAX_K; ++k) {
    const cand = s + BigInt(k) * st;
    if (isPrimeBig(cand)) return k;
  }
  throw new Error('Exceeded search cap while looking for prime in AP. Increase MAX_K.');
}

function computeTR_from_TC(TC) {
  let totalR = 0;
  for (let i = 0; i < N; ++i) {
    const base = rowSum[i] + TC;
    const k = neededStepsToPrime(base, N);
    totalR += k;
    if (totalR > 1e9) break;
  }
  return totalR;
}

function computeTC_from_TR(TR) {
  let totalC = 0;
  for (let j = 0; j < N; ++j) {
    const base = colSum[j] + TR;
    const k = neededStepsToPrime(base, N);
    totalC += k;
    if (totalC > 1e9) break;
  }
  return totalC;
}

function findMinimalTotalMoves() {
  const MAX_SEARCH = 5000;
  for (let TC = 0; TC <= MAX_SEARCH; ++TC) {
    const TR = computeTR_from_TC(TC);
    const TC2 = computeTC_from_TR(TR);
    if (TC2 === TC) return TR + TC;
  }
  for (let TR = 0; TR <= MAX_SEARCH; ++TR) {
    const TC = computeTC_from_TR(TR);
    const TR2 = computeTR_from_TC(TC);
    if (TR2 === TR) return TR + TC;
  }
  let TC = 0, TR = 0;
  for (let iter = 0; iter < 2000; ++iter) {
    TR = computeTR_from_TC(TC);
    const TCnew = computeTC_from_TR(TR);
    if (TCnew === TC) return TR + TC;
    TC = TCnew;
  }
  throw new Error('Failed to find a consistent (TR,TC) within search limits. Increase MAX_SEARCH.');
}

try {
  const ans = findMinimalTotalMoves();
  console.log(ans);
} catch (e) {
  console.error('Error:', e.message);
  process.exit(1);
}
