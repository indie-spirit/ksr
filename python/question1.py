def solve():
    n = int(input())
    arr = list(map(int, input().split()))
    c = 0
    while True:
        found = False
        for i in range(len(arr)):
            total = 1
            for j in range(i, len(arr)):
                total += arr[j]
                if total < 0:
                    arr = arr[:i] + arr[j+1:]
                    c += 1
                    found = True
                    break
            if found:
                break
        if not found:
            break
    print(c)
solve()