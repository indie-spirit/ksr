function minMovesToPrimeGrid(grid) {
    const N = grid.length;

    let rowSum = new Array(N).fill(0);
    let colSum = new Array(N).fill(0);

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            rowSum[i] += grid[i][j];
            colSum[j] += grid[i][j];
        }
    }

    const limit = 2000000;
    let isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i)
                isPrime[j] = false;
        }
    }

    function stepsToPrime(x) {
        let s = 0;
        while (!isPrime[x]) {
            x++;
            s++;       
        }
        return s;
    }

    let ops = 0;


    for (let r of rowSum)
        ops += stepsToPrime(r);


    for (let c of colSum)
        ops += stepsToPrime(c);

    return ops;
}


let grid = [ 
    [1, 2],
    [3, 4]
];

console.log(minMovesToPrimeGrid(grid));  
