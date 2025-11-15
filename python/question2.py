def is_prime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    return True
def next_prime(n):
    candidate = n
    while not is_prime(candidate):
        candidate += 1
    return candidate

def min_operations_to_sync_grid(N, grid):
    row_sums = [sum(grid[i]) for i in range(N)]
    col_sums = [sum(grid[i][j] for i in range(N)) for j in range(N)]
    target_row_primes = [next_prime(row_sums[i]) for i in range(N)]
    target_col_primes = [next_prime(col_sums[j]) for j in range(N)]
    row_inc = [target_row_primes[i] - row_sums[i] for i in range(N)]
    col_inc = [target_col_primes[j] - col_sums[j] for j in range(N)]
    total = sum(row_inc) + sum(col_inc)
    return total
N = int(input())
grid = []
for _ in range(N):
    row = list(map(int, input().split()))
    grid.append(row)
result = min_operations_to_sync_grid(N, grid)
print(result)