let str = "a?b??";

solve(str);
function solve(str){
    let s = str.split("");

    const n = s.length;

    const letter = "abcefghijklmnopqrstuvwxyz";

    for(let i=0;i<n;i++){
        if(s[i] == '?'){
            for(let c of letter){
                if(i >=1 && s[i-1] == c) continue;
                
                if(i >=2 && s[i-2] == c) continue;
                
                s[i] = c;
                break;
            }

        

            if(s[i] == '?'){
                console.log(-1);
                return;
            } }

            else{
                if(i >=2 && s[i] == s[i-2]){
                console.log(-1);
                return;
            }

            }

            
        
    }
    console.log(s.join());
}