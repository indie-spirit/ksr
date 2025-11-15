
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
if (input.length === 0) {
  process.exit(0);
}
const s = input[0].trim();
const n = s.length;
const arr = s.split('');
function causesPalindrome(i, ch, arr) {
  
  if (i - 2 >= 0 && arr[i - 2] === ch) return true;
  
  if (i - 3 >= 0 && arr[i - 3] === ch && arr[i - 1] === arr[i - 2]) return true;
  
  return false;
}


let possible = true;


for (let i = 0; i < n; i++) {
  if (arr[i] === '?') continue;
  
  if (i - 2 >= 0 && arr[i - 2] !== '?' && arr[i - 2] === arr[i]) {
    possible = false;
    break;
  }
  
  if (i + 2 < n && arr[i + 2] !== '?' && arr[i + 2] === arr[i]) {
    possible = false;
    break;
  }
  
  if (i - 3 >= 0 && arr[i - 3] !== '?' && arr[i - 3] === arr[i] && arr[i - 1] !== '?' && arr[i - 1] === arr[i - 2]) {
    possible = false;
    break;
  }
}

if (!possible) {
  console.log(-1);
  process.exit(0);
}


for (let i = 0; i < n; i++) {
  if (arr[i] === '?') {
    let placed = false;
    for (let c = 0; c < 26; c++) {
      const ch = String.fromCharCode(97 + c);
      if (causesPalindrome(i, ch, arr)) continue;
      
      arr[i] = ch;
      placed = true;
      break;
    }
    if (!placed) {
      possible = false;
      break;
    }
  } else {
    
    if (i - 2 >= 0 && arr[i - 2] === arr[i]) {
      possible = false;
      break;
    }
    if (i - 3 >= 0 && arr[i - 3] === arr[i] && arr[i - 1] === arr[i - 2]) {
      possible = false;
      break;
    }
  }
}

if (!possible) {
  console.log(-1);
} else {
  const out = arr.join('');
 
  let ok = true;
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i + len <= n; i++) {
      const sub = out.slice(i, i + len);
      const rev = sub.split('').reverse().join('');
      if (sub === rev) {
        ok = false;
        break;
      }
    }
    if (!ok) break;
  }
  if (!ok) console.log(-1);
  else console.log(out);
}
