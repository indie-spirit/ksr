'use strict';
const fs = require('fs');
function solve(input)
{
  input = input.trim().split(/\s+/).map(Number);
  let n = input[0];
  let a = input.slice(1);
  let pq = []; 
  let sum = 0, ops = 0;
  function heapPush(x) 
  {
    pq.push(x);
    let i = pq.length - 1;
    while (i > 0) 
        {
      let p = (i - 1) >> 1;
      if (pq[p] >= pq[i]) 
        break;
      [pq[p], pq[i]] = [pq[i], pq[p]];
      i = p;
    }
  }
  function heapPop()
   {
    let top = pq[0];
    let last = pq.pop();
    if (pq.length)
         {
      pq[0] = last;
      let i = 0;
      while (true)
        {
        let l = 2*i+1, r = 2*i+2, largest=i;
        if (l < pq.length && pq[l] > pq[largest]) 
            largest = l;
        if (r < pq.length && pq[r] > pq[largest]) 
            largest = r;
        if (largest === i) 
            break;
        [pq[i], pq[largest]] = [pq[largest], pq[i]];
        i = largest;
      }
    }
    return top;
  }

  for (let x of a)
     {
    sum += x;
    if (x < 0)
         heapPush(-x);

    while (sum < 0) 
        {
      let biggest = heapPop(); 
      sum += biggest;
      ops++;
    }
  }

  console.log(ops);
}
solve(fs.readFileSync(0,'utf8'));
