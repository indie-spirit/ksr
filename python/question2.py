def operations(grid):
    import math
    N = len(grid)
    def is_prime(x):
        if x < 2: return False
        if x % 2 == 0: return x == 2
        r = int(math.sqrt(x))
        for i in range(3, r+1, 2):
            if x % i == 0:
                return False
        return True
    def next(x):
        while not is_prime(x):
            x += 1
        return x
    rowsum = [sum(grid[r]) for r in range(N)]
    colsum = [sum(grid[r][c] for r in range(N)) for c in range(N)]
    row = sum(next(rowsum[i]) - rowsum[i] for i in range(N))
    col = sum(next(colsum[j]) - colsum[j] for j in range(N))
    return max(row, col) + 1

n = []
def get():
    r = int(input())
    for i in range(0,r):
        n.append(list(map(int, input().split())))
        r -= 1
get()
print(operations(n))