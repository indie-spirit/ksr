def restore_string(s):
    s = list(s)
    n = len(s)
    for i in range(n):
        if s[i] == '?':
            for c in "abcdefghijklmnopqrstuvwxyz":
                if i > 1 and s[i-2] == c:
                    continue
                s[i] = c
                break   
    for i in range(3, n):
        if s[i] == s[i-2]:       
            return "-1"
    return "".join(s)
print(restore_string(input().strip()))
