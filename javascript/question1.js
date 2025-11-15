let size = 7;
let arr = [2,-5,3,-2,4,-1,6];

let sum = 0;
let count = 0;
let curr = arr[0];

for(let i=0; i<size; i++){

    sum += arr[i];
    // curr = arr[i-1] ? arr[i-1] : null;

    if(sum < 0){
        count += 1;
        curr = arr[i];
    }
}
console.log(count);