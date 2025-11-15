def min_corridor_collapses(arr):
    prefix = 0
    used = []      
    collapses = 0
    for x in arr:
        prefix += x
        used.append(x)
        while prefix < 0:
            mx = used[0]
            idx = 0
            for i in range(1, len(used)):
                if used[i] > mx:
                    mx = used[i]
                    idx = i
            prefix -= mx
            used.pop(idx)
            collapses += 1
    return collapses
n = int(input())
arr = list(map(int, input().split()))
print(min_corridor_collapses(arr))
