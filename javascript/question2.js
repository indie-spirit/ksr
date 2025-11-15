function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num%i === 0)
        return false;
    }
    return true;
}   
function nextPrime(num) {
    let prime = num;
    while (!isPrime(prime)) {
        prime++;
    }
    return prime;
}
function min_Operations_To_PrimeGrid(grid) {
    const n = grid.length;
    const rowSums = Array(n).fill(0);
    const colSums = Array(n).fill(0);           
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rowSums[i] += grid[i][j];
            colSums[j] += grid[i][j];
        }
    }
    const rowOps = rowSums.map(sum => nextPrime(sum) - sum);
    const colOps = colSums.map(sum => nextPrime(sum) - sum);
    return Math.max(...rowOps, ...colOps);
}