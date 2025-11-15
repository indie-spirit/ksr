'use strict';
const fs=require('fs');
function validAfterSet(sArr,pos,ch) {
  if (pos-2>=0&&sArr[pos-2]===ch)
    return false;
  if(pos-3>=0&&sArr[pos-3]===ch&&sArr[pos-2]===sArr[pos - 1]) 
    return false;
  return true;
}
function solve(input) {
  const s=input.trim();
  const n=s.length;
  const arr=s.split('');
  for (let i=0;i<n;i++) {
    if (arr[i]==='?') {
      let p=false;
      for (let k=0;k<26;k++) {
        const ch=String.fromCharCode(97+k);
        if (validAfterSet(arr,i,ch)) {
          arr[i]=ch;
          p=true;
          break;
        }
      }
      if(!p) {
        console.log(-1);
        return;
      }
    } else{
           if(!validAfterSet(arr,i,arr[i])) {
        console.log(-1);
        return;
      }
    }
  }
  console.log(arr.join(''));
}
solve(fs.readFileSync(0, 'utf8'));










