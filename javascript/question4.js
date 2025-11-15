function restoreString (s){
    s = s.split('');
        const n=s.length;
        for(let i=0;i<n;i++){
            if(s[i]=='?'){
                for(let c='a'.charCodeAt(0);c<='z'.charCodeAt(0);c++){
                    let ch=String.fromCharCode(c);
                    if((i>=2 && s[i-1]==ch && s[i-2]==ch) || (i>=1&&i+1<n && s[i-1]==ch && s[i+1]==ch) || (i+2<n &&  s[i+1]==ch && s[i+2]==ch)) continue;
                    s[i]=ch;
                    break;

                }
                if(s[i]=='?') return -1;
            }
        }
        return s.join(");
        }
        console.log(restoreString("a?b??"));
        



