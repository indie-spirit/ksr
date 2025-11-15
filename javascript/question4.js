function solve(s) {
  const n = s.length;
  const arr = s.split('');

  // Greedy: for each '?', try 'a' to 'z'
  for (let i = 0; i < n; i++) {
    if (arr[i] === '?') {
      let found = false;
      for (let c = 0; c < 26; c++) {
        const letter = String.fromCharCode(97 + c); // 'a' to 'z'
        arr[i] = letter;

        // Check if this creates a palindrome of length 3
        let valid = true;

        // Check with position i-2 and i
        if (i >= 2 && arr[i - 2] === arr[i]) {
          valid = false;
        }

        // Check with position i and i+2
        if (valid && i + 2 < n && arr[i] === arr[i + 2]) {
          valid = false;
        }

        if (valid) {
          found = true;
          break;
        }
      }

      if (!found) {
        return '-1';
      }
    }
  }

  // Verify the final string has no palindromes of length >= 3
  for (let i = 0; i <= n - 3; i++) {
    if (arr[i] === arr[i + 2]) {
      return '-1';
    }
  }

  return arr.join('');
}

function solveFromStdin(input) {
  const s = input.trim();
  console.log(solve(s));
}

if (typeof require !== 'undefined' && require.main === module) {
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf8');
  solveFromStdin(input);
}

module.exports = { solve, solveFromStdin };
