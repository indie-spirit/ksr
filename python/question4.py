"""Title: Restore Lexicographically Smallest Valid String
Description:
String S contains lowercase letters + ?.
Replace each ? with a lowercase letter such that:

No substring of length ≥ 3 is a palindrome
Among all valid strings, choose lexicographically smallest
If impossible → print -1
Conditions:
1 ≤ N ≤ 200000
Palindrome-free constraint must be enforced efficiently
Sample Input:
a?b??
Sample Output:
aabab"""



s = "a?b??"
result = ''
for i in range(len(s)):
    if s[i] == '?':
        result+=s[:i]
    else:
        result+=s[i:i]
        
print(result)


