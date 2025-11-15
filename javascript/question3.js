function min(n, m, E, grid) {
  const start = [], target = [], T = [];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      const ch = grid[r][c];
      if (ch === 'S') start.push(r, c);
      if (ch === 'X') target.push(r, c);
      if (ch === 'T') T.push([r, c]);
    }
  }
  const best = Array.from({ length: n }, () => Array(m).fill(null));
  let q = [{ r: start[0], c: start[1], e: BigInt(E) }];
  best[start[0]][start[1]] = BigInt(E);
  const dr = [-1, 1, 0, 0], dc = [0, 0, -1, 1];
  const cost = (r, c) => {
    const ch = grid[r][c];
    return (ch >= '1' && ch <= '9') ? BigInt(1 + +ch) : 1n;
  };
  let steps = 0;
  while (q.length) {
    for (const o of q) if (o.r === target[0] && o.c === target[1]) return steps;
    const nq = [];
    let bestT = null;
    for (const o of q) {
      for (let k = 0; k < 4; k++) {
        const nr = o.r + dr[k], nc = o.c + dc[k];
        if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
        if (grid[nr][nc] === '#') continue;
        const ne = o.e - cost(nr, nc);
        if (ne < 0n) continue;
        if (best[nr][nc] === null || ne > best[nr][nc]) {
          best[nr][nc] = ne;
          nq.push({ r: nr, c: nc, e: ne });
        }
      }
    }
    if (bestT !== null) {
      for (const [tr, tc] of T) {
        if (best[tr][tc] === null || bestT > best[tr][tc]) {
          best[tr][tc] = bestT;
          nq.push({ r: tr, c: tc, e: bestT });
        }
      }
    }
    q = nq;
    steps++;
  }
  return -1;
}
console.log(min(4, 5, 20, grid)); 
