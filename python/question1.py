def collapses(arr):
    import heapq
    prefix = 0
    operations = 0
    max_arr = []  
    for x in arr:
        prefix +=x
        if x < 0:
            heapq.heappush(max_arr, x)
        while prefix < 0:
            worst = heapq.heappop(max_arr)
            prefix -= worst   
            operations += 1
    return operations
input()
print(1+collapses(list(map(int, input().split()))))