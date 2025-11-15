def restore_lexicographically_smallest(s):
    s = list(s)
    n = len(s)
    for i in range(n):
        if s[i] == '?':
            found = False
            for c in 'abcdefghijklmnopqrstuvwxyz':
                s[i] = c
                valid = True
                if i >= 2:
                    if s[i-2] == s[i]: 
                        valid = False
                if valid and i + 2 < n:
                    if s[i] == s[i+2]: 
                        valid = False
                
                if valid:
                    found = True
                    break
            
            if not found:
                return "-1"
    
    return ''.join(s)

s = input().strip()
print(restore_lexicographically_smallest(s))
