inp = list(input().strip())
n = len(inp)
for i in range(n):
    if inp[i] == '?':
        for ch in "abc":                
            if (i>=1 and inp[i-1]==ch): continue
            if (i>=2 and inp[i-2]==ch): continue
            inp[i] = ch
            break
print("".join(inp))
