import sys, math
def isprime(n):
    if n < 2: return False
    if n % 2 == 0: return n == 2
    r = int(n**0.5)
    for i in range(3, r+1, 2):
        if n % i == 0: return False
    return True
def next_k(start, step):
    g = math.gcd(start, step)
    if g > 1:                    
        return 0 if start == g and isprime(g) else None
    k = 0
    while True:
        if isprime(start + k*step):
            return k
        k += 1
def solve(grid):
    N = len(grid)
    row = [sum(r) for r in grid]
    col = [sum(grid[i][j] for i in range(N)) for j in range(N)]
    x = 0
    for _ in range(2000):        
        r = []
        y = 0
        for s in row:
            k = next_k(s + x, N)
            if k is None: return -1
            r.append(k); y += k
        c = []
        x_new = 0
        for s in col:
            k = next_k(s + y, N)
            if k is None: return -1
            c.append(k); x_new += k
        if x_new == x:
            return sum(r) + sum(c)
        x = x_new
    return -1
data = sys.stdin.read().split()
N = int(data[0])
grid = []
idx = 1
for _ in range(N):
    row = list(map(int, data[idx:idx+N]))
    idx += N
    grid.append(row)
print(solve(grid))