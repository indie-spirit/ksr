a=int(input())
b,c=map(int,input().split())
d,e=map(int,input().split())
count=0
for i in range(a):
    if i*i%2==0:
        count+=1

sum=b+c
print(sum)