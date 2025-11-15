def restore_valid_string(s):
    #store the length of the string
    n = len(s)
    if n == 0:
        return "-1"
    #intialise the stack in list(concpet) and last_char (var) to store the last char in the list not a symble
    stack = []
    last_char = None
    # check each value in the String !=? ture then add it in the stack and store it in the variable (last_char) 
    for char in s:
        if char != '?':
            stack.append(char)
            last_char = char
        else:
            if len(stack) >= 2 and stack[-1] == stack[-2]:
                if len(stack) >= 3 and stack[-3] == last_char:
                    return "-1"
                #else:
                    #stack.pop()
                    #stack.pop() # it  pop 2 times so the stack  length  equal to two it retuen -1  
            else:
                stack.append(last_char)
    
    if any(s[i] == s[j] and i != j and (j - i) >= 3 for i in range(n - 1) for j in range(i + 3, n)):
        return "".join(stack)
    
    return "".join(stack)


# get input from user 
input_str = input().strip()
# call the fuction to execute 
print(restore_valid_string(input_str))  