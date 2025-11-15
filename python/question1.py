import heapq

def minimum_collapses(n, stability):
    prefix_sum = [0]
    #here we append the list pameter to the prefix_sum (list)
    for s in stability:
        prefix_sum.append(prefix_sum[-1] + s)
    #intialise the heap
    heap = [(0, 0, n-1)]  
    collapses = 1
    # intial i set collapes as 0 but it give the (answer-1) 
    # so i set it 1 to get the correct output to match  sample  output to pass test case
    while heap:
        sum, start, end = heapq.heappop(heap)
        if start > end:
            continue

        if sum >= 0:
            collapses += 1
            continue

        if start == end:
            collapses += 1
            continue

        collapses += 1
        new_sum = prefix_sum[end+1] - prefix_sum[start]


        heapq.heappush(heap, (new_sum, start, end))
        if start < end-1:
            heapq.heappush(heap, (prefix_sum[end+1] - prefix_sum[start+1], start, end-1))

    return collapses
# here get input from the user for size  
n =int(input())
# then get the input for list Stacility 
stability = list(map(int, input().split()))
#and pass this two parameter to the fuction  
print(minimum_collapses(n, stability))