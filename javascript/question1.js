let arr=[2,-5,3,-2,4,-1,6];
let arr1=arr;
let sum=0;
let l=1;
let len=arr.length;
let min=arr.length;

let result=1;
while(l>0 && len!=l){
    sum=0;
    result=1;
for(let i=0;i<arr.length;i++){
    len=arr.length;
    sum=arr[i]+sum;
    if(sum>0){
        result=result+1;
    
    }
    else{
        arr=arr.slice(i+1,len);
        l=arr.length;
        break;
    }
    
}
min=Math.min(min,result);
}
console.log(min);
