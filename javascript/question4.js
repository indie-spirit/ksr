function lexico(s) {
    s = s.split("");        
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '?') {
            for (let c of ['a','b','c']) {
                if (c!==s[i-1] &&  c!== s[i-2] ) {
                    s[i] = c;
                    break;
                }
            }
        } else {
            if (s[i] === s[i-2])
                 return "-1";
        }
    }
    return s.join("");
}
console.log(lexico("a?b??"));