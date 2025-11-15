function minCollapses(arr) {
    let count =0;
    let sum =0;
    for (let i=0;i<arr.length;i++) {
        sum +=arr[i];
        if (sum <0) {
            count++;
            sum =0; 
        }
    }
    return count;
}
let arr = [2, -5, 3, -2, 4, -1, 6];
console.log(minCollapses(arr));
