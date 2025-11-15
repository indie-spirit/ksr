function name1(){
    const a="a?b??";
    const b=a.length
    const arr=a.split('')
    for(let i=0;i<b;i++){
        if(arr[i]==="?"){
            var c=false;
            for(let d=0;d<26;d++){
                const ch=String.fromCharCode(97+d)
                arr[i]=ch;
                c=true;
                break;
            }
        }
    }
}
name1("a?b??")