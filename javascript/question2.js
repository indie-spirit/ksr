function minope(grid) {
    let n = grid.length;
    let rowSums = new Array(n).fill(0);
    let colSums = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rowSums[i] += grid[i][j];
            colSums[j] += grid[i][j];
        }
    }

    let operations = 1;
    for (let i = 0; i < n; i++) {
        if (!isPrime(rowSums[i])) {
            operations += getNextPrime(rowSums[i]) - rowSums[i];
        }
        if (!isPrime(colSums[i])) {
            operations += getNextPrime(colSums[i]) - colSums[i];
        }
    }

    return operations;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getNextPrime(num) {
    while (!isPrime(num)) num++;
    return num;
}

let grid = [[1, 2], [3, 4]];
console.log(minope(grid)); 