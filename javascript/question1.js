//  Question 1 — *Dynamic Corridor Reduction*

// ## **Title:** Minimum Corridor Collapse Operations  
// ## **Description:**  
// A corridor has `N` chambers in a line, each with a stability value.  
// You may perform an operation:  
// Choose **any contiguous subarray** whose **sum is negative**, and collapse it entirely (remove it).  
// After collapsing, the corridor closes the gap.

// Goal: Perform the **minimum number of collapses** so that **no negative-sum contiguous subarray exists**.

// ## **Conditions:**  
// - 1 ≤ N ≤ 200000  
// - Stability values range from −10^9 to 10^9  
// - Efficient algorithms required (prefix sums, priority queues)

// ## **Sample Input:**  
// ```
// 7
// 2 -5 3 -2 4 -1 6




function minCollapses(chambers) {
    let n = chambers.length;
    let prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + chambers[i];
    }
    let collapses = 0;
    let i = 0;

    while (i < n) {
        let j = i;
        let minSum = 0;
        let Negative = false;

        while (j < n) {
            let currentSum =prefixSum[j + 1] - prefixSum[i];
            if (currentSum<0) {
                Negative= true;
                break;
            }
            j++;
        }
        if (Negative) {
            collapses++;
            i = j + 1; 
        } else {
            i++;
        }
    }
    return collapses;
}

const chambers = [2, -5, 3, -2, 4, -1, 6];
console.log(minCollapses(chambers));


