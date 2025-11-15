def min_collapses(a):
    ops = 0
    curr = 0
    min_pref = 0

    for x in a:
        curr += x
        if curr < min_pref:      
            ops += 1     
            curr = x           
            min_pref = min(0, curr)
        else:
            min_pref = min(min_pref, curr)

    return ops
n = 7
arr = [2, -5, 3, -2, 4, -1, 6]
print(min_collapses(arr))   
