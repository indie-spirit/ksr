// # 🚩 Question 4 — *Encrypted Character Stream Reconstruction*

// ## **Title:** Restore Lexicographically Smallest Valid String  
// ## **Description:**  
// String `S` contains lowercase letters + `?`.  
// Replace each `?` with a lowercase letter such that:
// - No substring of length ≥ 3 is a **palindrome**  
// - Among all valid strings, choose **lexicographically smallest**  
// - If impossible → print `-1`

// ## **Conditions:**  
// - 1 ≤ N ≤ 200000  
// - Palindrome-free constraint must be enforced efficiently

// ## **Sample Input:**  
// ```
// a?b??
// ```

// ## **Sample Output:**  
// ```
// aabab
// ```




let s = "a?b??"
if (s.length === 0) {
  console.log(-1);
  process.exit(0);
}

let arr = s.split("");
const n = arr.length;

for (let i = 0; i < n; i++) {
  if (arr[i] === "?") {
    for (let ch of ["a", "b", "c"]) {
      if (i >= 2 && arr[i - 2] === ch) continue;
      if (i >= 3 && arr[i - 3] === ch && arr[i - 2] === arr[i - 1]) continue;

      arr[i] = ch;
      break;
    }
  }
}

let ok = true;

outer:
for (let i = 0; i < n; i++) {
  let l = i - 1, r = i + 1;
  while (l >= 0 && r < n && arr[l] === arr[r]) {
    if (r - l + 1 >= 3) {
      ok = false;
      break outer;
    }
    l--; r++;
  }

  
  l = i; r = i + 1;
  while (l >= 0 && r < n && arr[l] === arr[r]) {
    if (r - l + 1 >= 3) {
      ok = false;
      break outer;
    }
    l--; r++;
  }
}

if (!ok || arr.includes("?")) {
  console.log(-1);
} else {
  console.log(arr.join(""));
}
