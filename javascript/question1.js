let arr = [2,-5,3,-2,4,-1,6];
let n = arr.length;


let prefix = 0;
let maxprefix = -Infinity;
let ops =0;
for(let i=0;i<n;i++){
     prefix += arr[i];

     if(prefix < maxprefix){
        ops++;
        maxprefix = prefix;
     }

     else{
        maxprefix = prefix;
     }
}

console.log(ops-1);

