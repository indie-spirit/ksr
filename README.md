# Round - 2 | Problem solving | IndieSpirit Technologies. 

**Allowed Languages:** **Python or JavaScript ONLY**  
**Number of Questions:** 4 (Candidate must solve **any 3**)  
**Evaluation:** Hidden test cases, marks awarded per passing test.  
**Submission:** Each candidate must push code to their **own branch**.

---

# ❗ Allowed Languages — STRICT
Candidates are allowed to solve problems **ONLY using:**

✅ Python  
✅ JavaScript  

❌ No other languages allowed.  
❌ No external libraries except built‑in modules.

---

# 🚩 Question 1 — *Dynamic Corridor Reduction*

## **Title:** Minimum Corridor Collapse Operations  
## **Description:**  
A corridor has `N` chambers in a line, each with a stability value.  
You may perform an operation:  
Choose **any contiguous subarray** whose **sum is negative**, and collapse it entirely (remove it).  
After collapsing, the corridor closes the gap.

Goal: Perform the **minimum number of collapses** so that **no negative-sum contiguous subarray exists**.

## **Conditions:**  
- 1 ≤ N ≤ 200000  
- Stability values range from −10^9 to 10^9  
- Efficient algorithms required (prefix sums, priority queues)

## **Sample Input:**  
```
7
2 -5 3 -2 4 -1 6
```

## **Sample Output:**  
```
2
```

---

# 🚩 Question 2 — *Prime Synchronization Grid*

## **Title:** Minimum Operations to Synchronize Grid  
## **Description:**  
You are given an `N × N` grid.  
One move = increment **entire row** or **entire column** by 1.  
Goal: After some moves:
- Every **row sum** must be prime  
- Every **column sum** must be prime  
- Use **minimum moves**

## **Conditions:**  
- 1 ≤ N ≤ 600  
- Values: 0 to 1,000,000  
- Must compute next primes efficiently  
- Brute-force is impossible for large N

## **Sample Input:**  
```
2
1 2
3 4
```

## **Sample Output:**  
```
3
```

---

# 🚩 Question 3 — *Vanishing Path Teleportation*

## **Title:** Shortest Path with Self-Destructing Cells  
## **Description:**  
Grid symbols:
- `.` walkable  
- `#` blocked  
- digits `1–9`: stepping costs extra energy  
- `T`: teleport cells (can teleport to any other T at cost 0)

You start at `S` with **energy E**.  
Each move costs **1 energy**.  
Reaching cell with digit `d` costs **1 + d**.  
Goal: reach `X` without energy going negative.

Output the minimum **number of steps**, not energy.

## **Conditions:**  
- 1 ≤ N,M ≤ 2000  
- Energy E ≤ 10^12  
- Teleportation optional  
- Must use BFS / Dijkstra hybrid

## **Sample Input:**  
```
4 5 20
S..#T
.3.#.
..#.T
T...X
```

## **Sample Output:**  
```
7
```

---

# 🚩 Question 4 — *Encrypted Character Stream Reconstruction*

## **Title:** Restore Lexicographically Smallest Valid String  
## **Description:**  
String `S` contains lowercase letters + `?`.  
Replace each `?` with a lowercase letter such that:
- No substring of length ≥ 3 is a **palindrome**  
- Among all valid strings, choose **lexicographically smallest**  
- If impossible → print `-1`

## **Conditions:**  
- 1 ≤ N ≤ 200000  
- Palindrome-free constraint must be enforced efficiently

## **Sample Input:**  
```
a?b??
```

## **Sample Output:**  
```
aabab
```

---

# 📝 Evaluation Rules
- Hidden test cases used for scoring  
- Candidate must solve **ANY 3 of the 4**  
- Scores:
  - Q1 — 30 marks  
  - Q2 — 30 marks  
  - Q3 — 25 marks  
  - Q4 — 15 marks  
- Best 3 scores automatically selected

---

# 🧑‍💻 Candidate Submission
1. Clone repository  
2. Create branch: `your_name_with_initial-roll_number`  
3. Add **question.py** or **question.js**  
4. Push branch  

---

# Good luck — write optimal, efficient solutions!


