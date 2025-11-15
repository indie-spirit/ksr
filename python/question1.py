"""Dynamic Corridor Reduction
Title: Minimum Corridor Collapse Operations
Description:
A corridor has N chambers in a line, each with a stability value.
You may perform an operation:
Choose any contiguous subarray whose sum is negative, and collapse it entirely (remove it).
After collapsing, the corridor closes the gap.

Goal: Perform the minimum number of collapses so that no negative-sum contiguous subarray exists.

Conditions:
1 ≤ N ≤ 200000
Stability values range from −10^9 to 10^9
Efficient algorithms required (prefix sums, priority queues)
Sample Input:
7
2 -5 3 -2 4 -1 6
Sample Output:
2
"""

def minimum_corridor_collapses(arr):
    prefix = 0
    current_min = 0
    in_bad = False
    collapses = 0

    for x in arr:
        prefix += x
        if prefix < current_min:
            in_bad = True
        else:
            if in_bad:
                collapses += 1
                in_bad = False
            current_min = prefix

    return collapses


N = 7
arr = [2, -5, 3, -2, 4, -1, 6]
print(minimum_corridor_collapses(arr))  