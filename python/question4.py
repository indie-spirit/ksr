def min_palindrome_free_string(s):
    n = len(s)
    result = list(s)
    for i in range(n+1, -1, -1):
        if i > 0 and s[i] == s[i-1]:
            continue
        for j in range(26):
            if chr(ord('a') + j) != '?':
                break
        else:
            result[i] = chr(ord('a'))
    return ''.join(result)
s = 'a?b??'
print(min_palindrome_free_string(s))