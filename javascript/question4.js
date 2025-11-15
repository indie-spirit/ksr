function Main(a){
    a = a.split();
    const n = a.length;

    for (let i=0;i<n;i++){
        if(a[i] != '?'){
            if(i >0 && a[i] == (i=1) || (i>1 && a[i] == a))
                return "-1";
        }
    
        for(let c = 97; c<= 122;c++){
            let ch = String.frontCharCOde(c);
            if(i>0 && a[a-1] == ch)
                continue;
            if(i>1 && a[a-2] == ch)
                continue;
            a[i] = ch;
            break;
        }

        if(a[i] == '?')
            return "-1";
    }
    return a.join('');
}

console.log(Main('a?b??'));