def restore_string(s):
    s = list(s)
    n = len(s)
    for i in range(n):
        if s[i]=='?':
            for ch in"abc":       
                ok=True
                if i>=1 and s[i-1]==ch:
                    ok=False
                if i>=2 and s[i-2]==ch:
                    ok=False
                if ok:
                    s[i]=ch
                    break
    for i in range(n):
        if i>=2 and s[i]==s[i-2]:
            return "-1"
    return "".join(s)