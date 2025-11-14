# Problem Solving Question Bank

## Exam Instructions

-   **Total Questions:** 5\
-   **Candidate Must Answer:** Any 4 out of 5\
-   **Duration:** 2 Hours\
-   **Languages Allowed:** Python \ Javascript
-   **Focus:** Problem solving, logic, algorithmic thinking

------------------------------------------------------------------------

## **Question 1 --- The Shifting Pyramid**

### **Problem**

You are given a list of positive integers. You need to repeatedly
perform the following operation until the list becomes strictly
increasing:

-   Find every pair of adjacent elements where `A[i] >= A[i+1]`
-   Increase `A[i+1]` just enough so that `A[i+1] > A[i]`

Return the final modified list and the total number of increments
performed across the entire process.

### **Conditions**

-   1 ≤ N ≤ 2000\
-   1 ≤ A\[i\] ≤ 10⁹\
-   Must avoid brute force that loops unnecessarily

### **Sample Input**

    5
    4 4 2 2 1

### **Sample Output**

    Final List: 4 5 6 7 8
    Total Increments: 14

------------------------------------------------------------------------

## **Question 2 --- The Mirror Segment Split**

### **Problem**

A string is considered *mirror‑splittable* if it can be split into
exactly **two non‑empty parts A and B** such that:

    reverse(A) == B  OR  reverse(B) == A

Return **YES** if such a split exists, otherwise **NO**.

### **Conditions**

-   String length ≤ 200,000\
-   Only lowercase letters\
-   Must avoid checking every possible split naively

### **Sample Input**

    xabcba

### **Sample Output**

    YES

------------------------------------------------------------------------

## **Question 3 --- Missing Pair Sum**

### **Problem**

You are given an integer `K` and a list of integers. Two numbers form a
*valid pair* if their sum equals `K`. Pairs cannot share elements. Some
elements may remain unused.

Your task is to return: - Number of valid non‑overlapping pairs - The
count of leftover elements that could *never* be part of any pair
summing to K

### **Conditions**

-   1 ≤ N ≤ 200,000\
-   Integer values can be negative\
-   Must avoid O(N²) solutions

### **Sample Input**

    K = 10  
    List: 3 7 5 5 1 9 2 8

### **Sample Output**

    Valid Pairs: 3  
    Leftover Elements: 2

------------------------------------------------------------------------

## **Question 4 --- The Rotating XOR Cipher**

### **Problem**

You receive a sequence of integers and a rotation count `R`.\
Perform the following transformation:

1.  Rotate the list right by `R` positions\

2.  Compute a cumulative XOR:

        output[i] = arr[0] XOR arr[1] XOR ... XOR arr[i]

Return the final transformed list.

### **Conditions**

-   1 ≤ N ≤ 300,000\
-   0 ≤ R ≤ 10⁹\
-   Must compute rotation efficiently

### **Sample Input**

    R = 2  
    List: 4 1 3 2

### **Sample Output**

    After Rotation: 3 2 4 1  
    Final XOR List: 3 1 5 4

------------------------------------------------------------------------

## **Question 5 --- The Unstable Island Chains**

### **Problem**

You are given a 2D grid of 0s and 1s representing water and land.\
A *land cell* is unstable if: - It is land (1)\
- It connects horizontally or vertically to **exactly one** other land
cell

Count the number of unstable cells across the entire grid.

### **Conditions**

-   1 ≤ rows, cols ≤ 2000\
-   Must be optimized (avoid repeated scanning)\
-   4‑direction adjacency only

### **Sample Input**

    Grid:
    1 1 0
    0 1 0
    1 0 1

### **Sample Output**

    Unstable Cells: 3

------------------------------------------------------------------------
