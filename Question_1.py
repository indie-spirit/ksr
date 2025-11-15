import sys
def solve():
    n=int(sys.stdin.readline())
    a=list(map(int,sys.stdin.readline().split()))
    s=0;mx=0;ans=0
    for x in a:
        s+=x
        if s-mx>0:
            ans+=1
            mx=s
        mx=max(mx,s)
    print(ans)

