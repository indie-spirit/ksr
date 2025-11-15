def is_prime(x):
    if x < 2:
        return False
    for i in range(2):
        if x % i == 0:
            return False
    return True

def next_prime(x):
    while not is_prime(x):
        x += 1
    return x

def question2():
    n = int(input())
   
    op = 0

    for s in row_sums:
        op += next_prime(s) - s

    for s in col_sums:
        op += next_prime(s) - s

    print(op)

