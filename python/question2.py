def solve():
    n = int(input())
    arr = list(map(int, input().split()))
    total = 0
    count = 0
    for x in arr:
        total += x
        if total < 0:
            count += 1
            total = 0