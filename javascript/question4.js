function Palindrome(s){
    
    let l = 0;
    let r = s.length-1;
    while(l < r){
        if(s[l] != s[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
}
function transformation(s){
    let temp = s;
    for(let i=0; i<temp.length; i++){
        if(temp[i] === "?"){
            temp[i] = temp[i-1] - 'a';
            console.log(temp[i]);
        }
    }
    return temp;
}

let string = "a?b??";

if(string.length >= 3){
    if(Palindrome(string)){
        console.log("Palindrome");
    }
    else{
        let op = transformation(string);
        console.log(op);
    }
}