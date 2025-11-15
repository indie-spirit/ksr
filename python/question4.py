s = input().strip()
n = len(s)
s = list(s)
for i in range(n):
    if s[i] != '?':
        if i > 0 and s[i] == s[i-1]:
            print(-1); exit()
        if i > 1 and s[i] == s[i-2]:
            print(-1); exit()
for i in range(n):
    if s[i] == '?':
        for c in "abc":    
            if (i > 0 and s[i-1] == c) or (i > 1 and s[i-2] == c):
                continue
            s[i] = c
            break
for i in range(n):
    if i > 0 and s[i] == s[i-1]:
        print(-1); exit()
    if i > 1 and s[i] == s[i-2]:
        print(-1); exit()
print("".join(s))