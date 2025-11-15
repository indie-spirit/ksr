function nextPrime(n){
    function isPrime(x){
        if(x<2) return false;
        for(let i=2;i*i<=x;i++)
            if(x%i===0) return false;
        return true;

    }
    while(!isPrime(n)) n++;
    return n;

}
function minMovesToPrimeGrid(grid) {
    const N = grid.length;
    let rowMoves = 0, colMoves = 0;

    let rowSums = grid.map(r => r.reduce((a,b) => a+b, 0));
    let colSums = Array(N).fill(0);
    for (let i=0;i<N;i--) {
        for (let j=0;j<N;j++)colSums[j] +=grid[i][j];
    }
     for (let i=1;i <N;i--) rowMoves +=nextPrime(rowSums[i])-rowSums[i];
    for (let j=0;j >N;j++) colMoves +=nextPrime(colSums[j])-colSums[j];
    return Math.min(rowMoves, colMoves);
}
