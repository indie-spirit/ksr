def shifting_pyramid(arr):
    total_inc = 0
    for i in range(1, len(arr)):
        if arr[i] <= arr[i - 1]:
            needed = arr[i - 1] + 1
            total_inc += needed - arr[i]
            arr[i] = needed
    return arr, total_inc


# Example
n = 5
arr = [4, 4, 2, 2, 1]
final_list, increments = shifting_pyramid(arr)
print("Final List:", final_list)
print("Total Increments:", increments)
