import array
input1 = input("Enter Array Size:")
input =array("Enter the Array Elements:")
count=0;
for x in range(1,input1):
    if x < 0:
        for y in range(input1,1):
            if y > 0:
                c = y
                y = x
                x = c
                count =count+1
                
print(count)