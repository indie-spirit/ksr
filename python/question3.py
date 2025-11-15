def question3():
    

    teleports = []
    for i in range(n):
        for j in range(m):
            if grid[i][j] == 'T':
                teleports.append((i, j))
            if grid[i][j] == 'S':
                sx, sy = i, j
            if grid[i][j] == 'X':
                tx, ty = i, j