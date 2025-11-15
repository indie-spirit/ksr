import heapq
n = int(input())
arr = list(map(int, input().split()))
p = 0
h = []
op = 0
for i in arr:
    p -= i
    heapq.heappush(h, -i)       
    if p < 0:
        a = heapq.heappop(h)  
        p -= a              
        op += 1
print(op)