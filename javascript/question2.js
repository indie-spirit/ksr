function isPrime(n) {
    if (n < 2) return false;
    if (n % 2 === 0) return n === 2;
    let r = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= r; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
function nextprime(x){
    while(!isPrime(x)) x++;
    return x;
}
function minop(grid){
    const n=grid.length;
    let r=Array(N).fill(0);
    let C=Array(N).fill(0);
     for(let i=0;i<N;i++){
        for (let j=0;j<N;j++) {
            R[i]+=grid[i][j];
            C[j]+=grid[i][j];
        }
    }
}
const MAX_OFFSET=200; 
for(let x=0;x<=MAX_OFFSET;x++){
    let pr =R.map(r)
}