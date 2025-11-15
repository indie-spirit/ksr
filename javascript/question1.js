function minCollapses(arr) {
    let minHeap = [];  
    let sum = 0;
    let collapses = 0;

    function push(x) {
        minHeap.push(x);
        let i = minHeap.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (minHeap[p] >= minHeap[i]) break;
            [minHeap[p], minHeap[i]] = [minHeap[i], minHeap[p]];
            i = p;
        }
    }

    function pop() {
        let top = minHeap[0];
        let last = minHeap.pop();
        if (minHeap.length > 0) {
            minHeap[0] = last;
            let i = 0;
            while (true) {
                let left = 2 * i + 1, right = 2 * i + 2, largest = i;
                if (left < minHeap.length && minHeap[left] > minHeap[largest]) largest = left;
                if (right < minHeap.length && minHeap[right] > minHeap[largest]) largest = right;
                if (largest === i) break;
                [minHeap[i], minHeap[largest]] = [minHeap[largest], minHeap[i]];
                i = largest;
            }
        }
        return top;
    }

    for (let x of arr) {
        sum += x;
        push(x);

        
        while (sum < 0) {
            sum -= pop();  
            collapses++;
        }
    }

    return collapses;
}

console.log(minCollapses([2, -5, 3, -2, 4, -1, 6]));
