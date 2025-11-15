s = list(input().strip())
n = len(s)
for i in range(n):
    if s[i] == '?':
        for j in 'abc':
            if (i > 0 and s[i-1] == j):
                continue
            if (i > 1 and s[i-2] == j):
                continue
            s[i] = j
            break
for i in range(2, n):
    if s[i] == s[i-2] and s[i] == s[i-1]:
        print(-1)
        
print("".join(s))




        
            
            
            
            
    