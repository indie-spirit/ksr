def is_prime(x):
    if x<2:
        return False
    if x==2:
        return True
    if x%2==0:
        return False
    i=3
    while i*i<=x:
        if x%1==0:
            return False
        i+=2
        return True
    def next_prime(x):
        while not is_prime(x):
            x+=1
            return x
        n= int(input())
        g=[]
        for_ in range(n):
        g.append(list(map(int, input().split())))
        row=[]
        col=[]
        for i in range(n):
            s=0
            for j in range(n):
                s+=g[i][j]
                row.append(s)
                for i in range(n):
                    s=0
                    for i in range(n):
                    col.append(s)
                    moves=0
                    for i in range(n):
                        p=next_prime(row[i])
                        d=p-row[i]
                        moves+=d
                        row[i]+=d
                        for j in range(n):
                            col[j]+=d
                            for j in range(n):
                                p=next_prime(col[i])
                                d=p-col[i]
                                moves+=d
                                print(moves)
