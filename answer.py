#Question 3
r = 4
c = 5
e = 20
x1 = x2 = y1 = y2 = 0

arr= {("S",".",".","#","T"),(".","3",".","#","."),(".",".","#",".","T"),("T",".",".",".","X")} 
for (i=1; i<=4; i++) {
    for (j=1; j<=5; j++) {
        if(arr[i][j]=="S"):
            x1 = i
            y1 = j
        elif(arr[i][j]=="X"):
            x2 = i
            y2 = j
    }
}

if(x2>x1):
    a1 = x2- x1
else:
    a1 = x1- x2
    
if(y2>y1):
    a2 = y2-y1
else:
    a2 = y1-y2
    
sum = a1+a2
print (sum)

