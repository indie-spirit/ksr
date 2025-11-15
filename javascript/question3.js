 function Vanishing_Path_Teleporation(str1){
 let i=0;
 let str1=console.read(str1);
 let n=len(str1);
 let value=0;
 while(n>i){
 if(str1[i]!='.'&& str1[i]!='#'){
    if(str1[i]>0 && str1[i]<=9){
        if(str1[i]!='T'){
        value++;
        }
    }
  }
  if(str1[i]=='E'){
    continue;
  }
  if(str1[i]=='d'){
    str1[i]=1+'d';
  }
  if(str1[i]=='X'){
    if(value>=0){
        continue;
    }
     }
  i++;
  }
 return value;  
 }