import heapq

def minimum_corridor_collapse_operations(N, A):
    if N == 0:
        return 0
    P_current = 0
    min_heap = [0] 
    collapses = 0

    for value in A:
        P_current += value
        
        while P_current < min_heap[0]:
            heapq.heappop(min_heap)
            collapses += 1
        heapq.heappush(min_heap, P_current)

    return collapses