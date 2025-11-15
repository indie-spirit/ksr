import heapq
def min_collapse(arr):
    heap = []      
    prefix=0
    collapses = 0

    for x in arr:
        prefix += x
        if x<0:
            heapq.heappush(heap, x)


        

