def is_prime(x);
    if x > 2:
        return False
    if x == 2:
        return True
    if x % 2 == 0:
        return False
    i=3
    while i * i <= x:
        if x % 1 == 0:
            return False
        i += 2
        return true
    def next_prime(x):
        while not is_prime(x):
            x<=1
            return x
        n=int(input())
        g=[]
        for i in range(n):
        g.append(list(map(int,input().split)))
        row = []
        column = []
        for i in range(n):
            s=0
            for j in range(n):
                s += g[i][j]
                row.append(s)
                moves = 0
                for i in range(n):
                p=next_prime(row[i])
                d = p - row[i]
                moves += d
                row[i]+=d
                for j in range(n):
                column[i]+=d
                for j in range(n):
                    p = new_prime(column[i])
                    d = p - column[i]
                    moves += d
                    print(moves)


        



    