s = list(input().strip())
n = len(s)

for i in range(n):
    if s[i] == '?':
        for ch in 'abc':                 
            if (i>=1 and s[i-1]==ch): continue
            if (i>=2 and s[i-2]==ch): continue
            s[i] = ch
            break

print("".join(s))
    
    
    