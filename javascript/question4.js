'use strict';
const fs = require('fs');
function isPalindrome(s, l, r) 
{
  while (l < r)
     {
    if (s[l] !== s[r]) 
        return false;
    l++;
     r--;
  }
  return true;
}
function makesBadPalindrome(arr, pos)
{
 
  for (let len = 3; len <= 5; len++) 
    {
    let l = pos - len + 1;
    if (l < 0) 
        break;
    if (isPalindrome(arr, l, pos)) 
        return true;
  }
  return false;
}

function solve(input) 
{
  let s = input.trim();
  let arr = s.split('');
  let n = arr.length;

  for (let i = 0; i < n; i++)
     {
    if (arr[i] === '?') 
        {
      let placed = false;
      for (let c = 97; c <= 122; c++) 
        {
        arr[i] = String.fromCharCode(c);
        if (!makesBadPalindrome(arr, i)) 
            {
          placed = true;
          break;
        }
      }
      if (!placed) return console.log(-1);
    }
     else 
        {
      if (makesBadPalindrome(arr, i)) 
        return console.log(-1);
    }
  }

  console.log(arr.join(''));
}

const data = fs.readFileSync(0, 'utf8');
solve(data);
