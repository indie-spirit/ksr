function prime_num(limit) {
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime;
}function solve() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    let t = 0;
    let caseNum = 0;
    let n = 0;
    let grid = [];
    let lineNum = 0;
    if (caseNum < t) {
                if (n === 0) {
                    n = parseInt(line);
                    grid = [];
                } else {
                    const row = line.split(' ').map(Number);
                    grid.push(row);
                    if (grid.length === n) {
                        const result =prime_num(grid);
                        console.log(result);
                        caseNum++;
                        n = 0;
                    }
                }
            }}
    
