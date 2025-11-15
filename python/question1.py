import sys

def read_n_integers(n):
	nums = []
	while len(nums) < n:
		line = sys.stdin.readline()
		if not line:
			break
		parts = line.strip().split()
		if parts:
			nums.extend(map(int, parts))
	return nums[:n]

def find_min_subarray(arr):
	if not arr:
		return 0, -1, -1
	cur = arr[0]
	cur_l = 0
	best = arr[0]
	best_l = 0
	best_r = 0
	for i in range(1, len(arr)):
		if cur > 0:
			cur = arr[i]
			cur_l = i
		else:
			cur += arr[i]
		if cur < best:
			best = cur
			best_l = cur_l
			best_r = i
	return best, best_l, best_r

def main():
	try:
		n_line = sys.stdin.readline()
		if not n_line:
			return
		n = int(n_line.strip())
	except Exception:
		return
	arr = read_n_integers(n)
	ops = 0
	while True:
		min_sum, l, r = find_min_subarray(arr)
		if min_sum >= 0 or l == -1:
			break
		del arr[l:r+1]
		ops += 1
	print(ops)

if _name_ == "_main_":
	main()