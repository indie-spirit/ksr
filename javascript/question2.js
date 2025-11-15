 function isPrime(num) {
    if (num<= 1) return false;
    if (num <= 3) return true;
    if (num %2 === 0 || num % 3 === 0) 
        return false;
    for (let i = 5;i * i<= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) 
            return false;
    }
    return true;
}
function nextPrime(num) {
    let prime = num;    
    while (true) {
        prime++;
        if (isPrime(prime)) return prime;
    }
}

function PrimeGrid(grid) {
    const n = grid.length;
    let rowSums = new Array(n).fill(0);
    let colSums = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rowSums[i] += grid[i][j];
            colSums[j] += grid[i][j];
        }
    }
    let totalOperations = 0;
    for (let i = 0; i < n; i++) {
        let nextRowPrime = nextPrime(rowSums[i]);
        totalOperations += (nextRowPrime - rowSums[i]);
        let nextColPrime = nextPrime(colSums[i]);
        totalOperations += (nextColPrime - colSums[i]);
    }   
    return totalOperations;
}
const grid = [
    [1, 2],
    [3, 4]
];
console.log(PrimeGrid(grid));