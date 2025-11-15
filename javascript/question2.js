const data =[[1,2],[3,4]];
let idx = 0;
const N = data[idx++];
let grid = Array.from({ length: N }, () => Array.from({ length: N }, () => data[idx++]));
let rowSum = Array(N).fill(0);
let colSum = Array(N).fill(0);
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        rowSum[i] += grid[i][j];
        colSum[j] += grid[i][j];
    }
}
function isPrime(x) {
    if (x < 2)return false;
    if (x % 2===0)return x === 2;
    for (let i = 3; i * i <= x; i += 2)
        if (x % i === 0) return false;
    return true;
}
function nextPrime(x) {
    if (x <= 2) return 2;
    if (x % 2 === 0) x++;
    while (!isPrime(x)) x += 2;
    return x;
}
let rowNeeds = rowSum.map(s => nextPrime(s) - s);
let colNeeds = colSum.map(s => nextPrime(s) - s);
let totalRowNeeded = rowNeeds.reduce((a, b) => a + b, 0);
let totalColNeeded = colNeeds.reduce((a, b) => a + b, 0);
console.log(Math.max(totalRowNeeded, totalColNeeded));