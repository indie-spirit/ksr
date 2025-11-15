n = int(input())
arr = list(map(int, input().split()))
op = 0
pre = 0
for i in arr:
    pre += i
    if pre < 0:
        op += 1
print(op)