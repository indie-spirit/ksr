def min_corridor_collapses(arr):
    import heapq
    prefix = 0
    operations = 0
    max_heap = []  

    for x in arr:
        prefix += x
        if x < 0:
            heapq.heappush(max_heap, x)

        while prefix < 0:
            worst = heapq.heappop(max_heap)
            prefix -= worst  
            operations += 1

    return operations

print(min_corridor_collapses([2,-5,3,-2,4,-1,6]))