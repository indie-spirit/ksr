n = int(input())
g = [list(map(int, input().split())) for i in range(n)]
r = [sum(r) for r in g]
c = [sum(g[i][j] for i in range(n)) for j in range(n)]
print(min(r))