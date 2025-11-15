"use strict";
const fs = require("fs");
function isPrime(n) 
{
  if (n < 2) 
    return false;
  if (n % 2 === 0) 
    return n === 2;
  for (let i = 3; i * i <= n; i += 2)
    if (n % i === 0) 
        return false;
  return true;
}
function nextPrime(x) 
{
  while (!isPrime(x)) 
    x++;
  return x;
}
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
let idx = 0;
const N = input[idx++];
let row = Array(N).fill(0);
let col = Array(N).fill(0);
for (let i = 0; i < N; i++) 
    {
  for (let j = 0; j < N; j++) 
    {
    const v = input[idx++];
    row[i] += v;
    col[j] += v;
  }
}
let moves = 0;
for (let x of row) moves += nextPrime(x) - x;
for (let x of col) moves += nextPrime(x) - x;
console.log(moves);
