a=[2,-5,3,-2,4,-1,6]
ans=0
for i in range(len(a)):
    for j in range(i+1,len(a)):
        if(j==len(a)):
            break
        sum=a[i]+a[j]
        if(sum<0):
            a.remove(a[i])
            a.remove(a[j])
            ans=ans+1
print(ans)