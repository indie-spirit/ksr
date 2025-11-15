def isPrime(n):
    num=n
    val=0
    prime=False
    for i in range(1,num):
        if(n%i==0):
            val=val+1
    if(val==1):
        prime=True
    return prime

a=[[1,2],[3,4]]


for i in range(2):
    sum=0
    for j in range(2):
        sum=a[i][i]+a[i][j]
        print(a[i][j],sum)
        isPrime(sum)