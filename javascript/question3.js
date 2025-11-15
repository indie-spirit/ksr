
'use strict';
const fs = require('fs');
class MinPQ 
{
  constructor(){ this.arr=[]; }
  push(item) { this.arr.push(item); this._siftUp(this.arr.length-1); }
  pop(){ if(!this.arr.length) return null; const r=this.arr[0]; const last=this.arr.pop(); if(this.arr.length){ this.arr[0]=last; this._siftDown(0);} return r; }
  _siftUp(i){ while(i>0){ const p=(i-1)>>1; if(this._cmp(this.arr[i], this.arr[p])<0){ [this.arr[i],this.arr[p]]=[this.arr[p],this.arr[i]]; i=p;} else break; } }
  _siftDown(i){ const n=this.arr.length; while(true){ let l=2*i+1, r=2*i+2, smallest=i; if(l<n && this._cmp(this.arr[l], this.arr[smallest])<0) smallest=l; if(r<n && this._cmp(this.arr[r], this.arr[smallest])<0) smallest=r; if(smallest!==i){ [this.arr[i],this.arr[smallest]]=[this.arr[smallest],this.arr[i]]; i=smallest; } else break; } }
  _cmp(a,b){ 
    if (a[0] !== b[0]) return a[0]-b[0];
    return a[1]-b[1];
  }
  empty(){ return this.arr.length===0; }
}
function solve(input)
{
  input = input.trim().split(/\n/);
  const header = input[0].trim().split(/\s+/).map(Number);
  let r=0;
  const R = header[0], C = header[1], E = BigInt(header[2]);
  const grid = [];
  let Sx=-1,Sy=-1, Tx=[]; let Xx=-1,Xy=-1;
  for (let i=1;i<=R;i++){
    const line = input[i].trim();
    grid.push(line.split(''));
    for (let j=0;j<C;j++){
      if (grid[i-1][j] === 'S') { Sx=i-1; Sy=j; }
      if (grid[i-1][j] === 'X') { Xx=i-1; Xy=j; }
      if (grid[i-1][j] === 'T') Tx.push([i-1,j]);
    }
  }
  const INF = BigInt(1e18);
  const best = Array.from({length:R}, ()=>Array.from({length:C}, ()=> ({steps: Number.MAX_SAFE_INTEGER, energy: INF})));
  const pq = new MinPQ();
  best[Sx][Sy] = {steps:0, energy:0n};
  pq.push([0, 0n, Sx, Sy]);
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  const teleportsMap = new Map(); 
  if (Tx.length > 1) {
    for (let [x,y] of Tx) {
      const key = x+','+y;
      teleportsMap.set(key, Tx.filter(p => p[0]!==x || p[1]!==y));
    }
  }
  while (!pq.empty()) {
    const [steps, energy, x, y] = pq.pop();
    const cur = best[x][y];
    if (steps > cur.steps || energy > cur.energy) continue;
    if (x===Xx && y===Xy) {
      if (energy <= E) 
      {
        console.log(steps);
        return;
      }
    }
    for (let [dx,dy] of dirs){
      const nx = x+dx, ny = y+dy;
      if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
      const ch = grid[nx][ny];
      if (ch === '#') continue;
      let addEnergy = 1n; 
      if (ch >= '1' && ch <= '9') addEnergy += BigInt(Number(ch));
      const nsteps = steps + 1;
      const nenergy = energy + addEnergy;
      if (nenergy > E) continue;
      const prev = best[nx][ny];
      if (nsteps < prev.steps || (nsteps === prev.steps && nenergy < prev.energy)) {
        best[nx][ny] = {steps: nsteps, energy: nenergy};
        pq.push([nsteps, nenergy, nx, ny]);
      }
    }
    const key = x+','+y;
    if (teleportsMap.has(key)) {
      for (const [tx,ty] of teleportsMap.get(key)) {
        const nsteps = steps + 1;
        const nenergy = energy + 1n;
        if (nenergy > E) continue;
        const prev = best[tx][ty];
        if (nsteps < prev.steps || (nsteps === prev.steps && nenergy < prev.energy)) {
          best[tx][ty] = {steps: nsteps, energy: nenergy};
          pq.push([nsteps, nenergy, tx, ty]);
        }
      }
    }
  }
  console.log(-1);
}
const data = fs.readFileSync(0,'utf8');
solve(data);