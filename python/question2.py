def is_prime(x):
    if x < 2:
        return False
    for i in range(2, int(x**0.5)+1):
        if x % i == 0:
            return False
    return True
def next_prime(x):
    while not is_prime(x):
        x += 1
    return x
def solve():
    grid = [list(map(int, input().split())) for _ in range(n)]
    row_sums = [sum(r) for r in grid]
    col_sums = [sum(grid[i][j] for i in range(n)) for j in range(n)]
    for s in row_sums:
        ops += next_prime(s) - s
    for s in col_sums:
        ops += next_prime(s) - s
    print(ops)


