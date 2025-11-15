a=5
b=[]
d=[]
an=[a,b]
for i in range(a):
    c=input()
    b.append(c)
for i in range(a):
    if b[i]=='?':
        b.remove(b[i])
    else:
        d.append(b[i])
print(d)