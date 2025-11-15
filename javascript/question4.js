function restoreString(s) {
    let n=s.length;
    let res=new Array(n);
    for (let i=0;i<n;i++) {
        if (s[i]!=='?') {
            res[i]=s[i];
        }else {
            for(let c='a';c<='z';c++) {
                if ((i<2||c!==res[i-1]&&c!==res[i-2]) &&
                    (i===n-1||c!==s[i+1]&&c!==s[i+2])){
                    res[i]=c;
                    break;
                }
            }
        }
    }
    return res.join('');
}
let s = 'a?b??';
console.log(restoreString(s));