let S = "a?b??".split(""); 
let n = S.length;
function isSafe(i, c, arr) {
    if (i >= 1 && arr[i-1] === c) return false;
    if (i >= 2 && arr[i-2] === c) return false;
    if (i >= 3 && arr[i-3] === c) return false;
    return true;
}

for (let i = 0; i < n; i++) {
    if (S[i] === "?") {
        let placed = false;
        for (let code = 97; code <= 122; code++) {
            let c = String.fromCharCode(code);
            if (isSafe(i, c, S)) {
                S[i] = c;
                placed = true;
                break;
            }
        }

        if (!placed) {
            console.log("-1");
            return;
        }
    } else {
        if (!isSafe(i, S[i], S)) {
            console.log("-1");
            return;
        }
    }
}
console.log(S.join(""));
