def reverse(s):
    n=len(s)
    for i in range (n):

        a=s[i:]
        b=s[::-1]
        if a[::-1]==b:
            return "YES"
        if b[::-1]==a:
            return "YES"
        return "NO"


s=input().strip()
print(reverse(s))