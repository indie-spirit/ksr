# Dynamic Corridor Reduction

n=7
arr=[2,-5,3,-2,4,-1,6]

t_sum=0
s=0
for i in arr:
    s=0
    for j in range(1,i+1):
        s+=arr[j]
    if s>0:
        t_sum=s    
        
print(t_sum-3)

