const fs = require("fs");
const data = fs.readFileSync(0, "utf8").trim().split(/\s+/);
let n = Number(data[0]);
let arr = data.slice(1).map(Number);
class MaxHeap {
    constructor() { this.h = []; }
    push(x) {
        this.h.push(x);
        let i = this.h.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.h[p] >= this.h[i]) break;
            [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
            i = p;
        }
    }
    pop() {
        if (this.h.length === 0) return null;
        const top = this.h[0];
        const last = this.h.pop();
        if (this.h.length > 0) {
            this.h[0] = last;
            let i = 0;
            while (true) {
                let l = i * 2 + 1, r = i * 2 + 2;
                let largest = i;
                if (l < this.h.length && this.h[l] > this.h[largest]) largest = l;
                if (r < this.h.length && this.h[r] > this.h[largest]) largest = r;
                if (largest === i) break;
                [this.h[i], this.h[largest]] = [this.h[largest], this.h[i]];
                i = largest;
            }
        }
        return top;
    }
}

let heap = new MaxHeap();
let prefix = 0;
let ops = 0;

for (let x of arr) {
    prefix += x;
    if (x < 0) heap.push(-x);          
    if (prefix < 0) {
        let largestNeg = heap.pop();
        prefix += largestNeg;           
        ops++;
    }
}

console.log(ops);
