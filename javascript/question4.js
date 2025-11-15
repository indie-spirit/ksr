let s ="a?b??";
let q=[];
let h=0;
for(var i=0;i<s.length;i++){
   if(s[i]!='?'){
    q[h]=s[i];
    h++;
   }
}
let k=0;
let s1="";
for(var i=0;i<s.length-1;i++){
    if(s[i]==='?' && s[i+1]!='?'){
         s1+=q[k];
         k=0;
    }
    else if(s[i]==='?' && s[i+1]==='?'){
        s1+=q[k++];
        s1+=q[k++];
        k=0;

    }
    else{
        s1+=s[i];
    }
}
console.log(s1);
