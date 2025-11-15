
'use strict';
const fs = require('fs');
function solve(input){
  let s = input.trim();
  if (!s) { console.log(''); return; }
  const n = s.length;
  let arr = s.split('');
  for (let i=0;i<n;i++){
    if (arr[i] === '?') {
      let placed = false;
      for (let chCode = 97; chCode <= 122; chCode++) {
        const ch = String.fromCharCode(chCode);
        if (i-1 >=0 && arr[i-1] === ch) continue;
        if (i-2 >=0 && arr[i-2] === ch) continue;
        arr[i] = ch;
        placed = true;
        break;
      }
      if (!placed) { console.log(-1); return; }
    } else {
      if (i-1 >=0 && arr[i] === arr[i-1]) { console.log(-1); return; }
      if (i-2 >=0 && arr[i] === arr[i-2]) { console.log(-1); return; }
    }
  }
  const res = arr.join('');
  console.log(res);
}
const data = fs.readFileSync(0,'utf8');
solve(data);