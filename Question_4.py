import sys
def solve():
    s=list(sys.stdin.readline().strip())
    n=len(s)
    for i in range(n):
        if s[i] =='?':
            for c in 'abc':
                if (i> 0 and s[i-1]==c) or (i >1 and s[i-2]==c):
                    continue
                s[i] =c;break
    for i in range(n - 2):
        if s[i]==s[i+ 2]: print(-1);return
    print(''.join(s))
