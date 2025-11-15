def isprime(x):
    if x<2:
        return False
    for i in range(2,int(x**0.5)+1):
        if x%i == 0:
            return False
    return True
def nextprime(x):
    while not isprime(x):
        x+=1
    return x

def solve():
    n=int(input())

    for s in row_sums:
        moves += nextprime(s)-s

    for s in col_sums:
        moves += nextprime(s)-s

    print(moves)
