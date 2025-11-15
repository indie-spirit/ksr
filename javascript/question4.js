function smallString(str) {
    str = str.split('');
    const n = s.length;
    for(let i=0;i<n;i++){
        if(s[i]=='?'){
            for(let c='a'.charCodeAt(0); c<='z'.charCodeAt(0); c++){
                let ch = String.fromCharCode(c);
                if((i>=1 && str[i-1]==ch) || (i>=2 && str[i-2]==ch)) 
                    continue;
                str[i]=ch;
                    break;
            }
        }
        if(i>=2 && str[i]==str[i-1] && str[i]==str[i-2]) 
            return -1;
    }
    return str.join('');
}
console.log(smallString("a?b??")); 
