function min(arr){
    let count=0;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum<0){
            count++;
            sum=0;
        }
    }
    return count;
}
console.log(min([-2,-5 ,3,-2,4,-1,6]));