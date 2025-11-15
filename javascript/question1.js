class MaxHeap {
    constructor() {
        this.data = [];
    }
    push(x) {
        this.data.push(x);
        this.up(this.data.length - 1);
    }
    pop() {
        if (this.data.length === 1) return this.data.pop();
        const top = this.data[0];
        this.data[0] = this.data.pop();
        this.down(0);
        return top;
    }
    up(i) {
        while (i > 0) {
            let p = (i - 1) >> 1;
            if (this.data[p] >= this.data[i]) break;
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p;
        }
    }
    down(i) {
        let n = this.data.length;
        while (true) {
            let l = 2 * i + 1;
            let r = 2 * i + 2;
            let largest = i;
            if (l < n && this.data[l] > this.data[largest]) largest = l;
            if (r < n && this.data[r] > this.data[largest]) largest = r;
            if (largest === i) break;
            [this.data[i], this.data[largest]] = [this.data[largest], this.data[i]];
            i = largest;
        }
    }
    isEmpty() {
        return this.data.length === 0;
    }
}
function minCollapseOperations(arr) {
    let heap = new MaxHeap();
    let prefix = 0;
    let ops = 0;

    for (let x of arr) {
        prefix += x;
        if (x < 0) heap.push(-x);
        while (prefix < 0) {
            let worst = heap.pop();     
            prefix += worst;
            ops++;       
        }
    }
    return ops;
}

let arr = [2, -5, 3, -2, 4, -1, 6];
console.log(minCollapseOperations(arr)); 
