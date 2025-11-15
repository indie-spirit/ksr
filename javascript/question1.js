    let n=[2,-5,3,-2,4,-1,6]
    const n1=new Array(n)
    for(let i=0;i<n;i++){
        n1[i]=data[p++];
        let c=0;
        let c1=0;
        for(let i=0;i<n;i++){
            c1+=n1[i]
            if(n1[i]<0){
                console.log("-1")
            }
            while(c>0){
                const d=n.pop();
                c1+=d;
                c++;
            }
        }
    console.log(c);
}
console.log(n);