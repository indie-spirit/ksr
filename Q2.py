n=2
arr=[[1,2],[3,4]]

def is_mirror_splittable(s):
    n = len(s)

    # Two-pointer check
    l, r = 0, n - 1
    while l < r and s[l] == s[r]:
        l += 1
        r -= 1

    # Remaining substring: check if one part is the reverse of the other
    a = s[:l]
    b = s[l:]

    if a[::-1] == b:
        return "YES"

    a = s[:r+1]
    b = s[r+1:]

    if b[::-1] == a:
        return "YES"

    return "NO"


print(is_mirror_splittable("xabcba"))
