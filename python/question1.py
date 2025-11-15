def question1():
    n = int(input())
    arr = int, input().split()

    total = 0
    count = 0

    for x in arr:
        total += x
        if total < 0:
            count += 1
            total = 0

    print(count)
