# check the n=number is prime or not ;
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True
#check the  minimun operation to get entire row or column sum is prime 
# and count the operation in the roiws_sums and col_sums lik it get increment   
def minimum_operations(n, grid):
    # here i manumally define the prime number in the list 
    #primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    row_sums = [sum(row) for row in grid]
    col_sums = [sum(col) for col in zip(*grid)]
    # intialy i set this as 0 ( operation count)
    row_ops = 0
    col_ops = 0

    for i in range(n):
        if not is_prime(row_sums[i]):
            row_ops += 1
            row_sums[i] += 1

        for j in range(n):
            if not is_prime(col_sums[j]):
                col_ops += 1
                col_sums[j] += 1

    return row_ops + col_ops
#get input from user
n =2
grid = [[1, 2], [3, 4]]
#function call here 
print(minimum_operations(n, grid))