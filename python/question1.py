inp=int(input())
lst=list(map(int,input().split()))
x,y=0,0
for i in lst:
    y+=i
    if y<0:
        x+=1
print(x)