n=int(input())
a=[]
c=[]
for i in range(1,n+1):
    b=int(input())
    a.append(b)
for i in range(n):
    if(a[i]>0):
    c.append(a[i])
    print(min(c))