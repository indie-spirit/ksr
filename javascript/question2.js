let N = 2;  
let grid = [
    [1, 2],
    [3, 4]
];

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function nextPrime(num) {
    while (!isPrime(num)) num++;
    return num;
}

let rowSum = Array(N).fill(0);
let colSum = Array(N).fill(0);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        rowSum[i] += grid[i][j];
        colSum[j] += grid[i][j];
    }
}
let maxNeed = 0;
for (let i = 0; i < N; i++) {
    let need = nextPrime(rowSum[i]) - rowSum[i];
    maxNeed = Math.max(maxNeed, need);
}
for (let j = 0; j < N; j++) {
    let need = nextPrime(colSum[j]) - colSum[j];
    maxNeed = Math.max(maxNeed, need);
}
console.log("Minimum Operations =", maxNeed);
