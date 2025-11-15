import sys
import numpy


def main():
    data = sys.stdin.read().strip().split()
    if not data:
        return
    n = int(data[0])
    arr = list(map(int, data[1:1+n]))

    i = 0
    ops = 0
    while i < n:
        if arr[i] >= 0:
            i += 1
            continue
        s = arr[i]
        j = i + 1
        while j < n and s + arr[j] < 0:
            s += arr[j]
            j += 1
        ops += 1
        i = j

    print(ops)


if __name__ == "__main__":
    main()