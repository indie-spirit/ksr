import heapq
def min_collapses(arr):
    max_heap = []
    prefix = 0
    ops = 0
    for x in arr:
        prefix += x
        heapq.heappush(max_heap, -x)
        while prefix < 0:
            worst = -heapq.heappop(max_heap)
            prefix -= worst
            ops += 1
    return ops
n = int(input().strip())
arr = list(map(int, input().split()))

print(min_collapses(arr))
