const readline  = require('readline').createInterface({
    input : process.stdin ,
    output : process.stdout
})
function restore(s) {
    let n = s.length;
    let res = new Array(n);

    for (let i = 0; i < n; i++) {
        if (s[i] !== '?') {
            res[i] = s[i];
        } else {
            for (let c = 'a'; c <= 'z'; c++) {
                if ((i < 2 || c !== res[i - 1] && c !== res[i - 2]) &&
                    (i === n - 1 || c !== s[i + 1] && c !== s[i + 2]) ){
                    res[i] = c;
                    break;
                }
            }
            if(i === n-1){
                res[i+1] = 'b'
            }
        }
    }

    return res.join('');
}
readline.question("" ,(input)=>{
    console.log(restore(input))
    readline.close()
})
