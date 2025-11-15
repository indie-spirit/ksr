def shift_pry(arr):
    count = 0
    n=len(arr)
    for i in range(n-1):
        if arr[i]==arr[i+1]:
            arr[i+1]=arr[i]+1
            count =arr[i+1]-arr[i]
        elif arr[i] > arr[i+1]:
            inc = arr[i]-arr[i+1]
            arr[i+1] = arr[i]+1
            count += inc

    return arr, count

n=int(input())
arr=list(map(int, input().split()))
res, shifts = shift_pry(arr)
print("Final List:", res)
print("Total Shifts:", shifts)