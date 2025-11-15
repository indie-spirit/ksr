function Collapses(arr) {
    let count = 0;
    let sum = 0;
    let heap = []; 
    for (let num of arr) {
        sum += num;
        if (sum < 0) {
            count++;
            sum = 0;
        }
    }
    return count;
}
let arr = [2, -5, 3, -2, 4, -1, 6];
console.log(Collapses(arr)); 