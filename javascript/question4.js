function restoreString(S) {
    const n = S.length;
    const arr = S.split('');    
    const letters = 'abcdefghijklmnopqrstuvwxyz';    
    for (let i = 0; i < n; i++) {
        if (arr[i] === '?') {
            for (let j = 0; j < letters.length; j++) {
            arr[i] = letters[j];
            if (!isPalindrome(arr.join(''))) {
            break;
            }
            }
        }
    }
    return arr.join('');
}

function isPalindrome(s) {
    const n = s.length;
    for (let i = 0; i < n / 2; i++) {
        if (s[i] !== s[n - 1 - i]) {
        return false;
        }
    }
    return true;
}