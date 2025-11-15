'use strict';
const fs = require('fs');
function solve(input) {
  const data = input.trim().split(/\s+/).map(Number);
  let idx=0;
  const n=data[idx++];
  const a=new Array(n);
  for(let i=0;i<n;i++)
    a[i]=data[idx++];
  const P=new Array(n+1);
  P[0]=0;
  for (let i=1;i<=n;i++)
    P[i]=P[i-1]+a[i-1];
  const stack=[P[0]];
  let ops=0;
for(let i=1;i<=n;i++) {
    const cur=P[i];
    if (cur>=stack[stack.length-1]) {
      stack.push(cur);
    } else {
      while(stack.length>1&&cur<stack[stack.length-1]) {
        stack.pop();
        ops++;
      }
      stack.push(cur);
    }
  }
  console.log(ops);
}
const input=fs.readFileSync(0,'utf8');
solve(input);

