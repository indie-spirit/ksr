let grid = [
  [1, 2],
  [3, 4],
];
let N = grid.length;
let R = [0, 0];
let C = [0, 0];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    R[i] += grid[i][j];
    C[j] += grid[i][j];
  }
}
let rp = [5, 7];
let rowMoves = rp[0] - R[0] + (rp[1] - R[1]);
let cp = [5, 7];
let colMoves = cp[0] - C[0] + (cp[1] - C[1]);
let ans = Math.min(rowMoves, colMoves);
console.log(ans);
