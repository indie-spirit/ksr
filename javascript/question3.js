'use strict';
const fs = require('fs');
function solve(input)
{
  input = input.trim().split("\n");
  let [R,C,E] = input[0].split(" ").map(Number);
  E = BigInt(E);
  let g = [];
  let S, X, T = [];
  for (let i = 0; i < R; i++)
    {
    g[i] = input[i+1].split("");
    for (let j = 0; j < C; j++) 
    {
      if (g[i][j] === 'S') S = [i,j];
      if (g[i][j] === 'X') X = [i,j];
      if (g[i][j] === 'T') T.push([i,j]);
    }
  }
  let tele = new Map();
  for (let [x,y] of T)
    tele.set(`${x},${y}`, T.filter(p => p[0]!=x || p[1]!=y));
    const INF = 1e18;
  let best = Array.from({length:R},()=>Array.from({length:C},()=>[INF, 10n**18n]));
  let pq = [[0,0n,S[0],S[1]]];
  best[S[0]][S[1]] = [0,0n];
  let dir = [[1,0],[-1,0],[0,1],[0,-1]];
  while (pq.length)
    {
    pq.sort((a,b)=>a[0]-b[0] || Number(a[1]-b[1]));
    let [st,en,x,y] = pq.shift();
    if (x===X[0] && y===X[1] && en<=E) 
        return console.log(st);
    for (let [dx,dy] of dir)
    {
      let nx=x+dx, ny=y+dy;
      if (nx<0||nx>=R||ny<0||ny>=C||g[nx][ny]==='#')
        continue;
      let cost = 1n + (/[1-9]/.test(g[nx][ny]) ? BigInt(g[nx][ny]) : 0n);
      let ns = st+1, ne = en+cost;
      if (ne<=E && (ns < best[nx][ny][0] || (ns==best[nx][ny][0] && ne < best[nx][ny][1]))) 
        {
        best[nx][ny] = [ns,ne];
        pq.push([ns,ne,nx,ny]);
      }
    }
    let key = `${x},${y}`;
    if (tele.has(key))
        {
      for (let [tx,ty] of tele.get(key))
        {
        let ns = st+1, ne = en+1n;
        if (ne<=E && (ns < best[tx][ty][0] || (ns==best[tx][ty][0] && ne < best[tx][ty][1])))
            {
          best[tx][ty] = [ns,ne];
          pq.push([ns,ne,tx,ty]);
        }
      }
    }
  }
  console.log(-1);
}
solve(fs.readFileSync(0,'utf8'));
