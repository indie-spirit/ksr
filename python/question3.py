def T(path, dp, r, c, rn, cn):
    if(r < rn and c < cn and dp[r][c] == -1):
        dp[r][c] = -1
        if(path[r][c] == 'T'):
            return min(steps(path, r+1, c, rn, cn), steps(path, r, c + 1, rn, cn))
        return min(T(path, dp, r-1, c, rn, cn), T(path, dp, r, c-1, rn, cn))


path = []
r = int(input())
c = int(input())
life = int(input())
dp = []
def d():
    for i in range(0, r):
        dd = []
        for j in range(0, c):
            dd.append(-1)
        dp.append(dd)

def getPath():
    for i in range(0, r):
        path.append(list(map(str, input().split())))


getPath()
nearestT = T(path, dp, r, c, r, c)