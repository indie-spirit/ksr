import sys
import heapq

INF = 10**30

def main():
    data = sys.stdin.read().split()
    it = iter(data)

    n = int(next(it))
    m = int(next(it))
    E = int(next(it))

    grid = []
    S = X = None
    tele = []

    for i in range(n):
        row = list(next(it))
        for j, ch in enumerate(row):
            if ch == "S":
                S = (i, j)
            elif ch == "X":
                X = (i, j)
            elif ch == "T":
                tele.append((i, j))
        grid.append(row)

    sr, sc = S
    xr, xc = X

    dist_steps = [[INF] * m for _ in range(n)]
    dist_energy = [[INF] * m for _ in range(n)]

    dist_steps[sr][sc] = 0
    dist_energy[sr][sc] = 0

    pq = [(0, 0, sr, sc)]
    used_teleports = False

    dirs = [(1,0),(-1,0),(0,1),(0,-1)]

    while pq:
        steps, energy, r, c = heapq.heappop(pq)
        if (steps, energy) != (dist_steps[r][c], dist_energy[r][c]):
            continue
        if energy > E:
            continue
        if (r, c) == (xr, xc):
            print(steps)
            return

        for dr, dc in dirs:
            nr, nc = r + dr, c + dc
            if 0 <= nr < n and 0 <= nc < m and grid[nr][nc] != "#":
                cost = 1
                if grid[nr][nc].isdigit():
                    cost += int(grid[nr][nc])
                ne = energy + cost
                if ne <= E:
                    ns = steps + 1
                    if ns < dist_steps[nr][nc] or (ns == dist_steps[nr][nc] and ne < dist_energy[nr][nc]):
                        dist_steps[nr][nc] = ns
                        dist_energy[nr][nc] = ne
                        heapq.heappush(pq, (ns, ne, nr, nc))

        if not used_teleports and grid[r][c] == "T":
            used_teleports = True
            for tr, tc in tele:
                if (tr, tc) == (r, c):
                    continue
                print(-1)
                if __name__ == "__main__":
                   main()
