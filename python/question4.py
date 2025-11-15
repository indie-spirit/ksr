s=str(input()).lower()

print(s[0],end='')

li=list(s)
for i in li:
    if i=='?':
        i='abab'
        print(i ,end='')
        break