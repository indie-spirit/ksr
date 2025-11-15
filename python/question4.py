a="a?b??"
for i in range(len(a)):
    if(a[i]=='?'):
        a[i]=a[i].replace(a[i],a[i-1])