let drome = "a?b??"
let count = 0;
for(let i=0;i<drome.length;i++){
    let c = drome.charAt(i);
    if(c == '?'){
        console.log("a")
        count++;
        if(count>2){
            console.log("b")
        }
    } 
}