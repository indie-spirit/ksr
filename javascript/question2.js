let n=2;
const arr=[[1,2],[3,4]];
let c=0;
let s=0;
let min=0;
for(var i=0;i<n;i++){
    for(var j=0;j<n-1;j++){
        s=arr[i][j]+arr[i][j+1];
        c=0;
        for(var k=2;k<Math.sqrt(s);k++){
            c++;
        }
        if(c==0){
            console.log(s);
        }
    }
    if(c<min){
        min=c;
    }
}
