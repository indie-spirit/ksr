import heapq
def min_corridor_collapse(A):
    operations=0
    current_sum=0
    min_heap=[]
    for x in A:
        current_sum += x
        heapq.heappush(min_heap, x)
        while current_sum>0:
            operations+=1
            most_negative = heapq.heappop(min_heap)
            current_sum -= most_negative
    return operations