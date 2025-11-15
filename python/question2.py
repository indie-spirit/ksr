n=int(input())
a=[]
b=[]
for i in range(1,n+1):
    c=int(input())
    a.append(c)
for i in range(1,n+1):
    d=int(input())
    b.append(d)
s1=sum(a)
s2=sum(b)
if(s1<s2):
    print(s1)
else:
    print(s2)