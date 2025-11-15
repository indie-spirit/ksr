s = "a?b??"
def smallest_valid(s):
    s = list(s)
    n = len(s)
    for i in range(n):
        if s[i] == '?':
            for ch in 'abcdefghijklmnopqrstuvwxyz':
                ok = True
                s[i] = ch
                if i >= 2 and s[i] == s[i-2]:
                    ok = False
                if i >= 3 and s[i] == s[i-3] and s[i-1] == s[i-2]:
                    ok = False
                if ok:
                    break
            else:
                return "-1"
    for i in range(2, n):
        if s[i] == s[i-2]:
            return "-1"
    return "".join(s)
print(smallest_valid(s))  

