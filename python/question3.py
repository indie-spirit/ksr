from collections import Counter

def missing(k,arr):
    freq=Counter(arr)
    valid=0
    left=0
    for i in freq:
        y=k-i
    if(y==i):
        valid += i
    else:
        valid += min(y,i)

    left =i-2* valid

    return valid,left

k=int(input())
arr=list(map(int,input().split()))
pairs,left=missing(k,arr)
print("Valid Pairs:", pairs)
print("Leftover Element:", left)