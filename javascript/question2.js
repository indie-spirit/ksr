
'use strict';
const fs = require('fs');
function mulmod(a,b,m){
  return (BigInt(a)*BigInt(b))%BigInt(m);
}
function powmod(a,e,m){
  let A = BigInt(a)%BigInt(m), R=1n;
  let E = BigInt(e);
  while(E>0n){
    if (E&1n) R = (R*A)%BigInt(m);
    A = (A*A)%BigInt(m);
    E >>= 1n;
  }
  return R;
}
function isPrime(n){
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  const d = n-1;
  const bases = [2,3,5,7,11,13,17,19,23];
  let s=0, m=d;
  while ((m&1)===0) { s++; m >>=1; }
  const nn = BigInt(n);
  for (let a of bases) {
    if (a >= n) continue;
    let x = powmod(a, m, nn);
    if (x===1n || x===BigInt(n-1)) continue;
    let cont=false;
    for (let r=1;r<s;r++){
      x = (x*x)%nn;
      if (x===BigInt(n-1)){ cont=true; break; }
    }
    if (cont) continue;
    return false;
  }
  return true;
}
function nextPrimeFrom(v){
  let x = Math.max(2, Math.floor(v));
  if (x % 2 === 0 && x !== 2) x++;
  while (!isPrime(x)) x += 2;
  return x;
}
function solve(input) {
  input = input.trim().split(/\s+/).map(Number);
  let idx = 0;
  const N = input[idx++]; 
  const grid = Array.from({length:N}, ()=>Array(N));
  for (let i=0;i<N;i++) for (let j=0;j<N;j++) grid[i][j]=input[idx++];
  const rowSum = new Array(N).fill(0);
  const colSum = new Array(N).fill(0);
  for (let i=0;i<N;i++){
    for (let j=0;j<N;j++){
      rowSum[i]+=grid[i][j];
      colSum[j]+=grid[i][j];
    }
  }
  const INF = 9e18;
  let best = INF;
  const LIMIT = 5000;
  for (let A = 0; A <= LIMIT; A++){
    let Bneeded = 0;
    let ok = true;
    for (let i=0;i<N;i++){
      let cur = rowSum[i] + A;
      let k = 0;
      while (true) {
        const val = cur + N*k;
        if (isPrime(val)) { Bneeded += k; break; }
        k++;
        if (k > 20000) { ok=false; break; }
      }
      if (!ok) break;
    }
    if (!ok) continue;
    let Aneeded = 0;
    for (let j=0;j<N;j++){
      let cur = colSum[j] + Bneeded;
      let k = 0;
      while (true){
        const val = cur + N*k;
        if (isPrime(val)) { Aneeded += k; break; }
        k++;
        if (k > 20000) { ok=false; break; }
      }
      if (!ok) break;
    }
    if (!ok) continue;
    if (Aneeded === A) {
      best = Math.min(best, A + Bneeded);
    }
  }
  if (best === INF) {
    for (let B = 0; B <= 5000; B++){
      let Aneeded = 0;
      let ok = true;
      for (let j=0;j<N;j++){
        let cur = colSum[j] + B;
        let k=0;
        while(true){
          const val = cur + N*k;
          if (isPrime(val)) { Aneeded += k; break; }
          k++;
          if (k>20000) { ok=false; break; }
        }
        if (!ok) break;
      }
      if (!ok) continue;
      let Bneeded = 0;
      for (let i=0;i<N;i++){
        let cur = rowSum[i] + Aneeded;
        let k=0;
        while(true){
          const val = cur + N*k;
          if (isPrime(val)) { Bneeded += k; break; }
          k++;
          if (k>20000) { ok=false; break; }
        }
        if (!ok) break;
      }
      if (!ok) continue;
      if (Bneeded === B) best = Math.min(best, Aneeded + B);
    }
  }
  if (best === INF) {
    let A = 0, B = 0;
    for (let i=0;i<N;i++) {
      let cur = rowSum[i];
      let k=0;
      while(!isPrime(cur + k)) k++;
      B += k; 
    }
    console.log(A+B);
  } else {
    console.log(best);
  }
}
const data = fs.readFileSync(0,'utf8');
solve(data);