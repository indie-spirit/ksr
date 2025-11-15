
def is_prime(n):
    if n < 2:
        return False
    
    small = [2,3,5,7,11,13,17,19,23,29]
    for p in small:
        if n % p == 0:
            return n == p

    d = n - 1
    s = 0
    while d % 2 == 0:
        d //= 2
        s += 1

    def check(a, d, n, s):
        x = pow(a, d, n)
        if x == 1 or x == n - 1:
            return True
        for _ in range(s - 1):
            x = (x * x) % n
            if x == n - 1:
                return True
        return False

    for a in [2, 7, 61]: 
        if not check(a, d, n, s):
            return False
    return True


def next_prime(x):
    if x <= 2:
        return 2
    if x % 2 == 0:
        x += 1
    while not is_prime(x):
        x += 2
    return x


def min_operations(grid, N):
    
    row_sum = [sum(grid[i]) for i in range(N)]
    
    col_sum = [sum(grid[i][j] for i in range(N)) for j in range(N)]

    moves = 0

    for r in row_sum:

        moves += next_prime(r) - r

    for c in col_sum:
        moves += next_prime(c) - c

    return moves

N = 2
grid = [
    [1, 2],
    [3, 4]
]

print(min_operations(grid, N))

