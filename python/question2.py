# You are given an N × N grid.
# One move = increment entire row or entire column by 1.
# Goal: After some moves:
# Every row sum must be prime
# Every column sum must be prime
# Use minimum moves
# Conditions:
# 1 ≤ N ≤ 600
# Values: 0 to 1,000,000
# Must compute next primes efficiently
# Brute-force is impossible for large N

def actions(N:)
 N=list(map(int,input.split()))
a=N*N
rows=N[0]
columns=N[0]
moves=0
if 1<= N <= 600:
 