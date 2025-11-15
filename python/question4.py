
import sys

def bad(s, i):
    if i >= 2 and s[i] == s[i-2]:
        return True
    if i >= 3 and s[i] == s[i-3] and s[i-1] == s[i-2]:
        return True
    return False

def main():
    s = list(sys.stdin.read().strip())
    n = len(s)

  
    for i in range(n):
        if s[i] != '?' and bad(s, i):
            print(-1)
            return

    for i in range(n):
        if s[i] == '?':
            for c in "abcdefghijklmnopqrstuvwxyz":
                s[i] = c
                if not bad(s, i):
                    break
            else:
                print(-1)
                return

    print
