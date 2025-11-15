def restore_lexicographically_smallest(S):
    N = len(S)
    S_list = list(S)
    for i in range(N):
        if S_list[i] == '?':
            for char_code in range(ord('a'), ord('z') + 1):
                char = chr(char_code)
                is_valid = True
                if i >= 2 and char == S_list[i-2]:
                    is_valid = False
                if i >= 3 and char == S_list[i-3]:
                    is_valid = False
                if i + 2 < N and S_list[i+2] != '?' and char == S_list[i+2]:
                    is_valid = False
                if i + 3 < N and S_list[i+3] != '?' and char == S_list[i+3]:
                    is_valid = False
                if is_valid:
                    S_list[i] = char
                    break
            if S_list[i] == '?':
                return "-1"
    return "".join(S_list)