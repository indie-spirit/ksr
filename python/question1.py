'''# 🚩 Question 1 — *Dynamic Corridor Reduction*

## **Title:** Minimum Corridor Collapse Operations  
## **Description:**  
A corridor has `N` chambers in a line, each with a stability value.  
You may perform an operation:  
Choose **any contiguous subarray** whose **sum is negative**, and collapse it entirely (remove it).  
After collapsing, the corridor closes the gap.

Goal: Perform the **minimum number of collapses** so that **no negative-sum contiguous subarray exists**.

## **Conditions:**  
- 1 ≤ N ≤ 200000  
- Stability values range from −10^9 to 10^9  
- Efficient algorithms required (prefix sums, priority queues)

## **Sample Input:**  
```
7
2 -5 3 -2 4 -1 6
```

## **Sample Output:**  
```
2
```'''
def main_collapse(corrdior):
    int = corrdior
    n = 0
    for i in range (i+n):
       n = n+i
       if (n<corrdior):
           print(n)
       if (n>corrdior):