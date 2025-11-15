def solve(s):
    s=list(s)
    for i in range(len(s)):
        if s[i]=='?':
            for c in 'abcdefghijklmnopqrstuvwxyz':
                bad=0
                if i>1 and s[i-2]==c: bad=1          
                if i>2 and s[i-3]==c and s[i-2]==s[i-1]: bad=1  
                if not bad:
                    s[i]=c
                    break
            else:
                return "-1"
    return "".join(s)

print(solve("a?b??")) 
