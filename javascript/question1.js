function minc(arr){
    let kept=[];   
    let sum=0;
    let ans=0;
    for (let x of arr){
        kept.push(x);
        sum+=x;
        while(sum<0){
            let max=0;
            for(let i = 1; i<kept.length;i++) {
                if (kept[i] > kept[max]) max = i;
            }
            sum-=kept[max];
            kept.splice(max, 1);
            ans++;
        }
    }
    return ans;
}
console.log(minc([2, -5, 3, -2, 4, -1, 6]));  

