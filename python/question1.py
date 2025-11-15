def min_collapses(arr):
    prefix = 0
    running_max = 0
    in_bad = False
    ops = 0

    for x in arr:
        prefix += x
        if prefix < running_max:
            in_bad = True
        else:
            if in_bad:
                ops += 1
                in_bad = False
            running_max = prefix

    if in_bad:
        ops += 1

    return ops

print(min_collapses(arr))


