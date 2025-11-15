# Dynamic Corridor Reduction

n=int(input())
arr=list(map(int,input().split()))
# n=7
# arr=[2,-5,3,-2,4,-1,6]
sum=0
c=0
prev=arr[0]
for i in range(1,n):
    next=prev+arr[i]
    if prev<0 and next>=0:
        c+=1
        prev=0
    prev=next
print(c)