n = int(input())
a = list(map(int, input().split()))
def has_negative_subarray(a):
    s = 0
    m = 0
    for x in a:
        s += x
        if s < m:
            return True
        if s > 0:
            s = 0
    return False
def collapse_once(a):
    s = 0
    m = 0
    l = 0
    L = 0
    R = 0
    for i in range(len(a)):
        s += a[i]
        if s < m:
            m = s
            L = l
            R = i
        if s > 0:
            s = 0
            l = i + 1
    return a[:L] + a[R+1:]
c = 0
while has_negative_subarray(a):
    a = collapse_once(a)
    c += 1
print(c)
