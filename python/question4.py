def question4():
    s = list(input().strip())
    n = len(s)

    for i in range(n):
        if s[i] == '?':
            for ch in "abc":  
                ok = True
                if i > 0 and s[i-1] == ch:
                    ok = False
                if i > 1 and s[i-2] == ch:
                    ok = False
                if ok:
                    s[i] = ch
                    break
    for i in range(n):
        if i > 0 and s[i] == s[i-1]:
            print(-1)
            return
        if i > 1 and s[i] == s[i-2]:
            print(-1)
            return

    print("".join(s))