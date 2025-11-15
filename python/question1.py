def collapses(arr):
    import heapq
    pre = 0
    operations = 0
    max = []  
    for x in arr:
        pre +=x
        if x < 0:
            heapq.heappush(max, x)
        while pre < 0:
            worst = heapq.heappop(max)
            pre -= worst   
            operations += 1
    return operations
input()
print(1+collapses(list(map(int, input().split()))))