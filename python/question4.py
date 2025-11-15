def validstring(s):
    s = list(s)
    n = len(s)
    def ok(i):
        if i >= 2 and s[i] == s[i-2]:
            return False
        if i >= 1 and s[i] == s[i-1]:
            return False
        return True
    for i in range(n):
        if s[i] == '?':
            for ch in 'abcdefghijklmnopqrstuvwxyz':
                s[i] = ch
                if ok(i):
                    break
            else:
                return "-1"
        else:
            if not ok(i):
                return "-1"
    return "".join(s)
