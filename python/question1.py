n = int(input())
a = list(map(int,input().split()))

i = 0
j = 0
for x in a:
    i += x
    if i < 0:
        j += 1

print(i)
          