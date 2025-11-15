N = 7
arr = [2, -5, 3, -2, 4, -1, 6]
import heapq
def min_collapses(arr):
    prefix = 0
    pq = []     
    operations = 0
    for x in arr:
        prefix += x
        heapq.heappush(pq, -x)
        while prefix < 0:
            largest = -heapq.heappop(pq)
            prefix -= largest
            operations += 1
    return operations
print(min_collapses(arr))
