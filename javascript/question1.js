
class MaxHeap {
    constructor() {
        this.data = [];
    }
push(x) {
        this.data.push(x);
        this._siftUp(this.data.length - 1);
    }
pop() {
        if (this.data.length === 0) return null;
        const top = this.data[0];
        const last = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = last;
            this._siftDown(0);
        }
        return top;
    }
siftUp(i) {
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.data[p] >= this.data[i]) break;
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p;
        }
    }
    siftDown(i) {
        let n = this.data.length;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (left < n && this.data[left] > this.data[largest]) largest = left;
            if (right < n && this.data[right] > this.data[largest]) largest = right;

            if (largest === i) break;

            [this.data[i], this.data[largest]] = [this.data[largest], this.data[i]];
            i = largest;
        }}}
    function minimumCollapses(arr) {
    let heap = new MaxHeap();
    let currSum = 0;
    let operations = 0;
    for (let x of arr) {
        currSum += x;
        if (x < 0) heap.push(-x); 
    while (currSum < 0 && heap.data.length > 0) {
            let largestNeg = heap.pop(); 
            currSum += largestNeg;
            operations++;
        }
    }
return operations;
}
const arr = [2, -5, 3, -2, 4, -1, 6];
console.log(minimumCollapses(arr)); 
