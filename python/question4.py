def rotate(arr,r):
    n=len(arr)
    r%=n
    rotated =arr[-r:]+arr[:-r]
    final=[]
    count=0
    for i in range(n):
        count^=rotated[i]
        final.append(count)
    return rotated,final


r=int(input())
arr=list(map(int, input().split()))
rotated,final=rotate(arr,r)
print("After Rotation:", rotated)
print("Final XOR List:", final)