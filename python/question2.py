import math
# Prime Synchronization Grid
def isPrime(n):
    if n < 2:
        return False
    for i in range(2,int(math.sqrt(n))+1):
        if n%i==0:
            return False
    return True
def issyn(n,r,c):
    for i in range(n):
        if((not isPrime(r[i])) or (not isPrime(c[i]))):
            return False    
    return True

n = int(input())
rs=list()
cs=list()
for i in range(n):
    cs.append(int(0))
mat=list()
for i in range(n):
    r=list(map(int,input().split()))
    mat.append(r)
    rs.append(sum(r))
    for j in range(n):
        cs[j]+=r[j]


    
